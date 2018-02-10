import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import firebase from 'firebase';
import Header from './Header';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Log Out',
    drawerIcon: () => {
      return (
        <Image
          source={require('./Pictures/LogOutIcon.png')}
          style={{ height: 30, width: 30 }}
        />
      );
    }
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
          <Header
          headerText={'Log Out'}
          navigation={this.props.navigation}
          />

      </View>
          );
  }
}


export default LogOut;
