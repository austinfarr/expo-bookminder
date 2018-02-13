import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from './Header';
//import Button from './Button';

class LogOut extends Component {
  static navigationOptions = {
    tabBarLabel: 'Library Layout',
    drawerIcon: () => {
      const uri = 'https://d30y9cdsu7xlg0.cloudfront.net/png/137857-200.png';
      return (
          <Image
              source={require('./Pictures/LibraryLayoutIcon.png')}
              style={{ height: 30, width: 30 }}
          />
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={'Library Layout'}
          navigation={this.props.navigation}
        />
        <ScrollView>
              <Image
                style={styles.albumCoverStyle}
                source={{ uri: 'https://www.esc.cam.ac.uk/images/library/libraryplan.jpg' }}
              />
              <Text>'Thanks to www.esc.cam.ac.uk/images/library/libraryplan.jpg/view'</Text>
          </ScrollView>
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
