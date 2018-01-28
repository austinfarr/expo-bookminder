import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class AddBook extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add Books'
  }
  render() {
    return (
      <Header headerText={'Add Book'} />
    );
  }
}

const styles = {
  tabStyle: {
    fontSize: 50
  }
};

export default AddBook;
