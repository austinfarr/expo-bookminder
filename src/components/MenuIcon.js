import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const MenuIcon = ({ whenClicked }) => {

  const styles = {
    buttonStyle: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
    },
    imageStyle: {
      height: 30,
      width: 30
    },
    containerStyle: {
      
    }
  };
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={whenClicked}
      >
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
        />
      </TouchableOpacity>
    </View>
  );
};


export default MenuIcon;
