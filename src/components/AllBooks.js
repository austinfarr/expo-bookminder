import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Header from './Header';
import BookList from './BookList';
import MenuButton from './Buttons/MenuButton';
import MenuIcon from './MenuIcon';

class AllBooks extends Component {
  static navigationOptions = {
    tabBarLabel: 'Browse Books',
    drawerIcon: () => {
      const uri = 'https://d30y9cdsu7xlg0.cloudfront.net/png/137857-200.png';
      return (
        <Image
          source={{ uri }}
          style={{ height: 40, width: 40 }}
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
        <MenuButton
          colorButton="#FFF"
          whenClicked={() => this.props.navigation.navigate('DrawerOpen')}
          title="Menu"
        >
          Menu
        </MenuButton>
      </View>
    );
  }
}


export default AllBooks;
