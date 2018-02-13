import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText, secureTextEntry, returnKeyType, keyboardType, onSubmitEditing, ref }) => {
  const { containerStyle } = styles;

    //The search bar takes inputs that are used to filter the BookList

  return (
    <View style={containerStyle}>
      <TextInput
        style={styles.inputStyle1}
        secureTextEntry={secureTextEntry}
        placeholder={'Search'}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        placeholderTextColor='#000000'
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = {
  inputStyle1: {
    height: 40,
    backgroundColor: 'rgba(192,192,192,0.3)',
    marginBottom: 5,
    color: '#2d3436',
    paddingHorizontal: 10,
    borderRadius: 5
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

export default SearchBar;
