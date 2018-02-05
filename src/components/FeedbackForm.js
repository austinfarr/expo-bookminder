import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import Header from './Header';
import MenuButton from './Buttons/MenuButton';

class FeedbackForm extends Component {
  static navigationOptions = {
    tabBarLabel: 'Feedback',
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Feedback'} />
        <WebView
          source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSceaRZIOq0AErAoXaukkdzH-k0ZioJ9j2V3lkidJtarBjz4vg/viewform?usp=sf_link' }}
          style={{ marginTop: 10 }}
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


export default FeedbackForm;
