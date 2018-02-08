import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';
import firebase from 'firebase';
import Header from './Header';
import BookList from './BookList';


class MyBooks extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Books',
    drawerIcon: () => {
      const uri = 'https://d30y9cdsu7xlg0.cloudfront.net/png/137857-200.png';
      return (
        <Image
          source={{ uri }}
          style={{ height: 40, width: 40 }}
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
