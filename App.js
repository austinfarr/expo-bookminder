
//Import libraries
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './config.json';
import NewNavigation from './src/components/NewNavigation';
import Spinner from './src/components/Spinner';
import NewLoginForm from './src/components/NewLoginForm';

export default class App extends Component {

  state = { loggedIn: false, email: '', isMounted: false };

  componentWillMount() {
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (this.state.isMounted) {
            this.setState({ loggedIn: true, email: user.email });
          }
        } else {
            this.setState({ loggedIn: false, email: '' });
        }
      });
    }

    componentDidMount() {
      this.setState({ isMounted: true });
    }
    componentWillUnmount() {
      this.setState({ isMounted: false });
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
