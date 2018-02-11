
//Import libraries
import React, { Component } from 'react';
import { Notifications } from 'expo';
import {
  View,
  Alert
} from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './config.json';
import registerForNotifications from './src/services/pushNotifications';
import Navigation from './src/components/Navigation';
import Spinner from './src/components/Spinner';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  state = { loggedIn: false, email: '', isMounted: false, notificationsRegistered: false };

  componentWillMount() {
      firebase.initializeApp(firebaseConfig);
      console.disableYellowBox = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (this.state.isMounted) {
            this.setState({ loggedIn: true, email: user.email });
            this.registerNotifications();
          }
        } else {
            this.setState({ loggedIn: false, email: '' });
        }
      });
    }

    componentDidMount() {
      this.setState({ isMounted: true });
      this.registerNotifications();
      Notifications.addListener((notification) => {
        console.log('Received notification!!!');
        const { data: { text }, origin } = notification;
        console.log(`notification: ${JSON.stringify(notification)}`)
        Alert.alert('Your reserved book is now available!', text, [{ text: 'OK' }]);
      });
    }

    componentWillUnmount() {
      this.setState({ isMounted: false });
    }

    registerNotifications() {
      if (this.state.email.length > 0 && !this.state.notificationsRegistered) {
        this.setState({ notificationsRegistered: true });
          registerForNotifications(this.state.email);
        }
  }

  render() {
    switch (this.state.loggedIn) {
      case false:
        return (
          <LoginForm />
        );
      case true:
      return (
        <View style={{ flex: 1 }}>
          <Navigation />
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
