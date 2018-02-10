import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const MenuIcon = ({ whenClicked }) => {
  const styles = {
    imageStyle: {
      height: 30,
      width: 35
    },
    viewStyle: {
    }
  };
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={whenClicked}
      >
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default MenuIcon;
