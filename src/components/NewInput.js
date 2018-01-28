import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

const NewInput = ({ label, value, onChangeText, placeHolder, secureTextEntry, returnKeyType, keyboardType, onSubmitEditing, ref }) => {
  const { inputStyle1, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle1}
        autoCapitalize='none'
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        placeholderTextColor="rgba(255,255,255,0.8)"
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        //ref={ref}
      />
    </View>
  );
};

const styles = {
  inputStyle1: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 5,
    color: '#FFF',
    paddingHorizontal: 10
  },
  inputStyle2: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  }
};

export default NewInput;
