import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import BookList from './BookList';


class MyBooks extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Books',
    drawerIcon: () => {
      return (
        <Image
          source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/2248-200.png' }}
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
        <Header headerText={'My Books'} />
        <BookList
          userName={this.state.email}
        />

        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
      </View>
    );
  }
}


export default MyBooks;
