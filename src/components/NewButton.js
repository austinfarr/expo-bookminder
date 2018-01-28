import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

const NewButton = ({ whenClicked, children }) => {
  const { inputStyle, labelStyle, containerStyle, imageStyle } = styles;

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

const styles = {
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 10,
    backgroundColor: '#2980b9',
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 20
  },
  buttonStyle: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
};

export default NewButton;
