import React, { Component } from 'react';
import { View, ScrollView, Button, Image } from 'react-native';
import Header from './Header';
//import Button from './Button';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Library Layout'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Library Layout'} />
        <ScrollView>
              <Image
                style={styles.albumCoverStyle}
                source={{ uri: 'https://www.esc.cam.ac.uk/images/library/libraryplan.jpg' }}
              />
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
    width: null,
    height: 450,
    resizeMode: 'contain',
    marginTop: 10
  },
  textStyle: {
    fontSize: 18
  }
};

export default LogOut;
