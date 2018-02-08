import React, { Component } from 'react';
import { View, WebView, Image } from 'react-native';
import Header from './Header';

class FeedbackForm extends Component {
  static navigationOptions = {
    tabBarLabel: 'Feedback',
    drawerIcon: () => {
      return (
        <Image
          source={require('./Pictures/Feedback.png')}
          style={{ height: 30, width: 30 }}
        />
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={'Feedback'}
          navigation={this.props.navigation}
        />
        <WebView
          source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSceaRZIOq0AErAoXaukkdzH-k0ZioJ9j2V3lkidJtarBjz4vg/viewform?usp=sf_link' }}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}


export default FeedbackForm;
