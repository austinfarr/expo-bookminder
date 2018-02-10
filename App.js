
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
import NewNavigation from './src/components/NewNavigation';
import Spinner from './src/components/Spinner';
import NewLoginForm from './src/components/NewLoginForm';

export default class App extends Component {

  state = { loggedIn: false, email: '', isMounted: false, notificationsRegistered: false };

  componentWillMount() {
      firebase.initializeApp(firebaseConfig);

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
        Alert.alert('New Push Message', text, [{ text: 'OK' }]);
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
