import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Header from './Header';
import BookList from './BookList';

class AllBooks extends Component {

  /*
    All Books displays every single book regardless of if they are available
    or not. From All Books the user can check out, return, and reserve books.
    This list can be filtered by the search bar where you can search by
    book title or author
  */

  static navigationOptions = {
    tabBarLabel: 'Browse Books',
    drawerIcon: () => {
      const uri = 'https://d30y9cdsu7xlg0.cloudfront.net/png/137857-200.png';
      return (
        <Image
          source={{ uri }}
          style={{ height: 35, width: 35 }}
        />
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          navigation={this.props.navigation}
          headerText={'Browse Books'}
        />
        <BookList
          userName={'*'}
        />
      </View>
    );
  }
}


export default AllBooks;
