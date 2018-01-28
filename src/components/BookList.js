//Import libraries
import React, { Component } from 'react';
import firebase from 'firebase';
import {
  ScrollView,
  View
} from 'react-native';
import BookDetail from './BookDetail';

//Make components
class BookList extends Component {
  //Initialize state with empty array (no data)

  static navigationOptions = {
    tabBarLabel: 'All Books'
}

state = { books: [], email: '' };

  //Called the moment the component is called
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
        });
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
    return filtered.map(whatever =>
      <BookDetail
        key={whatever.title}
        record={whatever}
        onCheckOut={this.checkOut}
        onReturn={this.returnBook}
        email={this.state.email}
      />);
  }

  //Render must return some JSX
  render() {
    console.log(this.state);

    return (
      <View style={styles.backgroundStyle}>
        <ScrollView>
          {this.renderBooks()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
  }
};

//Export component
export default BookList;
