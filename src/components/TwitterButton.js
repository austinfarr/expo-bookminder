import React from 'react';
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native';

const TwitterButton = () => {
  const styles = {
    containerStyle: {
      backgroundColor: '#1DA1F2',
      borderRadius: 2,
      height: 35,
      marginTop: 10,
      width: 215
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '500',
      fontSize: 15
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 10
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 15
    }
  };
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL('https://twitter.com/')}
      style={styles.containerStyle}
    >
      <View>
        <View style={styles.leftContainer}>
          <Image
            source={require('./Pictures/twitter.png')}
            style={{ height: 35, width: 35 }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.buttonText}>Tweet about it!</Text>
        </View>
      </View>
      </TouchableHighlight>
  );
};


export default TwitterButton;
