import React, { Component } from 'react';
import { View, Image } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import BookList from './BookList';


class MyBooks extends Component {

  /*
    My Books displays only the books checked out by the individual user
    and the books can be filtered by title and author. The books can
    be returned from this screen
  */

  static navigationOptions = {
    tabBarLabel: 'My Books',
    drawerIcon: () => {
      return (
        <Image
          source={require('./Pictures/MyBooksIcon.png')}
          style={{ height: 30, width: 30 }}
        />
      );
    }
  }

  state = { email: '' };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ email: user.email });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={'My Books'}
          navigation={this.props.navigation}
        />

        <BookList
          userName={this.state.email}
        />
      </View>
    );
  }
}


export default MyBooks;
