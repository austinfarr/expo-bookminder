//Import libraries
import React, { Component } from 'react';
import firebase from 'firebase';
import {
  ScrollView,
  View,
  Alert
} from 'react-native';
import BookDetail from './BookDetail';
import SearchBar from './SearchBar';

class BookList extends Component {

  static navigationOptions = {
    tabBarLabel: 'All Books'
  }

  /*
    This code creates the list of books by filtering the books based
    on the search. It puts every listed book into a BookDetail components.
    BookList also contains the logic for all the different scenarios including
    Checking Out, Returning, and Reserving books
  */

state = { books: [], email: '', search: '' };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ email: user.email });
        firebase.database().ref('library').on('value', snapshot => {
          const books = [];
          snapshot.forEach((element) => {
            const book = element.val();
            book.isbn = element.key;
            books.push(book);
          });
          this.setState({ books });
          this.checkForOverdue();
        });
      }
    });
  }

  onSearchChanged(search) {
    this.setState({ search });
  }

  checkForOverdue() {
    const { email } = this.state;
    this.state.books.forEach(book => {
    if (book.hasBeenReminded === false || typeof (book.hasBeenReminded) === 'undefined') {
      if (book.checkedOutBy === email) {
          const dueDate = new Date(book.dueDate);
          const today = new Date();
          if (today >= dueDate) {
              Alert.alert('', `${book.title} is overdue!`, [{ text: 'OK' }]);
              book.hasBeenReminded = true;
              this.saveToDatabase(book);
          }
        }
      }
    });
}

  saveToDatabase(book) {
    firebase.database().ref().child('library').child(book.isbn)
    .set(book)
    .then(() => {
      console.log(`${book.title} saved`);
    })
    .catch((e) => {
      console.log(`Error saving ${book.title} (${book.uuid}): ${e}`);
    });
  }

  returnBook = (b) => {
    const book = b;
    book.returnedBy = this.state.email;
    book.checkedOutBy = '';
    const email = this.state.email;
    console.log(`${book.title} returned by ${email}`);
    book.hasBeenReminded = false;
    this.saveToDatabase(book);
    book.dueDate = undefined;
  }

  checkOut = (b) => {
    const book = b;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const firstDay = new Date();
    book.checkedOutBy = this.state.email;
    const dueDate = new Date(firstDay.getTime() + oneWeek);
    book.dueDate = dueDate.getTime();
    book.returnedBy = '';
    book.reservedBy = '';
    this.saveToDatabase(book);
  }

  reserve = (b) => {
    const book = b;
    book.reservedBy = this.state.email;
    this.saveToDatabase(book);
  }

  unreserve = (b) => {
    const book = b;
    book.reservedBy = '';
    this.saveToDatabase(book);
  }

  //Fetching data from the state
  renderBooks() {
    const user = this.props.userName;
    let filtered = [];
    if (user === '*') {
      filtered = this.state.books;
    } else {
      filtered = this.state.books.filter(book => book.checkedOutBy === user);
    }
    if (this.state.search.length > 0) {
      const search = this.state.search.toLowerCase();
      filtered = filtered.filter(book => book.title.toLowerCase().search(search) >= 0
    || book.authors[0].toLowerCase().search(search) >= 0);
    }
    return filtered.map(whatever =>
      <BookDetail
        key={whatever.title}
        record={whatever}
        onCheckOut={this.checkOut}
        onReturn={this.returnBook}
        email={this.state.email}
        onReserve={this.reserve}
        onUnreserve={this.unreserve}
      />);
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <ScrollView>
          <SearchBar
            value={this.state.search}
            onChangeText={search => this.onSearchChanged(search)}
            returnKeyType="go"
          />
          {this.renderBooks()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    marginTop: 10
  }
};

//Export component
export default BookList;
