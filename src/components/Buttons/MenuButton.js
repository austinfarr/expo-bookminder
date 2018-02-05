import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuButton = ({ whenClicked, children, colorButton }) => {

  const styles = {
    containerStyle: {
      backgroundColor: colorButton,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonStyle: {
      textAlign: 'center',
      justifyContent: 'center',
      color: '#000',
      fontWeight: '700',
      fontSize: 20
    }
  };
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={whenClicked}
      >
        <Text style={styles.buttonStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default MenuButton;
