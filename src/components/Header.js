//Creating header Component

//Import libraries
import React from 'react';
import { Text, View } from 'react-native';
import MenuIcon from './MenuIcon';

//Make the component
//Header will display 'My Book' and 'Browse Books' etc.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <View style={styles.leftContainer}>
        <MenuIcon
          whenClicked={() => props.navigation.navigate('DrawerOpen')}
        />
      </View>
      <View style={styles.rightContainer}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
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
    paddingTop: 15,
    marginLeft: 25
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15
  }
};

//Make component available to other areas
export default Header;
