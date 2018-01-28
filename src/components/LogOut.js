import React, { Component } from 'react';
import { View, Image, Text, ScrollView, Button } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
//import Button from './Button';
import ReturnButton from './ReturnButton';
import CardItem from './CardItem';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Other Options'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header headerText={'Other Options'} />
              <CardItem>
                <Text style={styles.textStyle}>Library Layout:</Text>
              </CardItem>
            <CardItem>
              <Image
                style={styles.albumCoverStyle}
                source={{ uri: 'https://www.esc.cam.ac.uk/images/library/libraryplan.jpg' }}
              />
            </CardItem>
            <CardItem>
              <ReturnButton colorButton={'#00d8d6'} whenClicked={() => firebase.auth().signOut()}>
                Log Out
              </ReturnButton>
            </CardItem>
          </ScrollView>
          <Button
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title="Menu"
          />
      </View>
          );
  }
}

const styles = {
  albumCoverStyle: {
    flex: 1,
    height: 350,
    width: null
  },
  textStyle: {
    fontSize: 18
  }
};

export default LogOut;
