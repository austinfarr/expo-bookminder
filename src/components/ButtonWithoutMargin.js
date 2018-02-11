import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ButtonWithoutMargin = ({ whenClicked, children }) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={whenClicked}
      >
        <Text style={styles.buttonStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 10,
    backgroundColor: '#2980b9',
    marginTop: 10,
    marginHorizontal: 20
  },
  buttonStyle: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
};

export default ButtonWithoutMargin;
