import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle, imageStyle } = styles;

  return (
    <View style={containerStyle}>
      {/*<Text style={labelStyle}>{label}</Text>*/}
      <Image
        style={imageStyle}
        source={{ uri: label }}
      />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 65,
    width: 65
  }
};

export default Input;
