import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import Header from './Header';
import BookList from './BookList';


class MyBooks extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Books',
    /* drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={{ uri: 'https://cdn.osxdaily.com/wp-content/uploads/2010/10/giant-apple-logo-bw.png' }}
          style={{ height: 20, width: 20, paddingRight: 0, marginRight: 0 }}
        />
      );
    } */
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
