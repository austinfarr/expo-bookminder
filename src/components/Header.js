//Creating header Component

//Import libraries
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Make the component
//Header will display 'My Book' and 'Browse Books' etc.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
          />
        </View>
        <View style={styles.rightContainer}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//Styling
const styles = {
  viewStyle: {
    backgroundColor: '#E1E1E1',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 25
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginLeft: 25
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  imageStyle: {
    height: 35,
    width: 40
  }
};

//Make component available to other areas
export default Header;
