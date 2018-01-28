
//Import libraries
import React, { Component } from 'react';
import {
  View
} from 'react-native';
//import Header from './src/components/Header';
//import BookList from './src/components/BookList';
import firebase from 'firebase';
import Navigation from './src/components/Navigation';
import NewNavigation from './src/components/NewNavigation';
import Spinner from './src/components/Spinner';
import LoginForm from './src/components/LoginForm';
import NewLoginForm from './src/components/NewLoginForm';

export default class App extends Component {

  state = { loggedIn: false, email: '' };

  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyAzYM8nXEPAAtqz3I1Oj79Sq-5MDn00xe4',
        authDomain: 'fbla-bookminder.firebaseapp.com',
        databaseURL: 'https://fbla-bookminder.firebaseio.com',
        projectId: 'fbla-bookminder',
        storageBucket: 'fbla-bookminder.appspot.com',
        messagingSenderId: '472255148702'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true, email: user.email });
        } else {
          this.setState({ loggedIn: false, email: '' });
        }
      });
    }

  render() {
    switch (this.state.loggedIn) {
      case false:
        return (
          <NewLoginForm />
        );
      case true:
      return (
        <View style={{ flex: 1 }}>
          <NewNavigation />
        </View>
      );
      default:
      return (
        <View style={styles.spinerStyle}>
          <Spinner spinnerSize="large" />
        </View>
      );
    }
  }
}

const styles = {
  spinerStyle: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  viewStyle: {
    flexDirection: 'row'
  }
};
