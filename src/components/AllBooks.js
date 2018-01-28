import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import BookList from './BookList';

class AllBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'All Books',
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'All Books'} />
        <BookList
          userName={'*'}
        />

        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        />
      </View>
    );
  }
}


export default AllBooks;
