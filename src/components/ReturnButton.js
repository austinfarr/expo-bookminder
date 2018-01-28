import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ReturnButton = ({ whenClicked, children, colorButton }) => {
  const styles = {
    containerStyle: {
      paddingVertical: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: colorButton,
      marginHorizontal: 10,
      flex: 1
    },
    buttonStyle: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
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


export default ReturnButton;
