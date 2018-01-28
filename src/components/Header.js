//Creating header Component

//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make the component
//Header will display 'My Book' and 'Browse Books' etc.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>

    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//Styling
const styles = {
  viewStyle: {
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 20
  },
/*
  imageStyle: {
    height: 30,
    width: 30,
  }
*/
};

//Make component available to other areas
export default Header;
