import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import firebase from 'firebase';
import Header from './Header';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Other Options'
  }
  componentWillMount() {
    Alert.alert(
    'Are you sure',
    'Do you really wish to log out?',
    [
      { text: 'Yes',
      onPress: () => firebase.auth().signOut()
},
      { text: 'No', onPress: () => this.props.navigation.navigate('DrawerOpen') },
    ]
  );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header headerText={'Log Out'} />

      </View>
          );
  }
}


export default LogOut;
