//import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import ReturnButton from './ReturnButton';

const MoreInfo = ({ record, onCheckOut, email, onReturn }) => {
  const { title, checkedOutBy } = record;
  const image = record.imageLinks.smallThumbnail.replace(/^http:\/\//i, 'https://');
  const author = record.authors[0];
  const {
    headerContentStyle,
    headerTextStyle,
    albumCoverStyle,
    notAvailableViewStyle,
    dueDateStyle,
  } = styles;

  let action = '';
  let willShowDueDate;
  if (checkedOutBy === '' || typeof (checkedOutBy) === 'undefined') {
    action = (
      <ReturnButton
        whenClicked={() => onCheckOut(record)}
        colorButton="#0984e3"
      >
      {'Check out book'}
      </ReturnButton>);
  } else if (checkedOutBy !== email) {
    action = (
      <ReturnButton colorButton="#808e9b">
        {'Not Available'}
      </ReturnButton>
      );
  } else {
    action = (
      <View style={notAvailableViewStyle}>
        <ReturnButton colorButton="#00cec9" whenClicked={() => onReturn(record)} >
          {`Return ${title}`}
        </ReturnButton>
      </View>
      );
  }
  if (checkedOutBy === email) {
      willShowDueDate = (
        <Text style={dueDateStyle}>Due by {(new Date(record.dueDate)).toDateString()}</Text>
      );
  } else if (checkedOutBy !== '' && typeof (checkedOutBy) !== 'undefined') {
      willShowDueDate = (
        <Text style={dueDateStyle}>Due back by {(new Date(record.dueDate)).toDateString()}</Text>
      );
  }
  return (
    <Card>
    <CardItem>
      <Image
        style={albumCoverStyle}
        source={{ uri: image }}
      />
      <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>By {author}</Text>
          {willShowDueDate}
      </View>
    </CardItem>

    <CardItem>
      {action}
    </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    flex: 1,
    //backgroundColor: '#d2dae2'
  },
  headerTextStyle: {
    fontSize: 20,
    flexWrap: 'wrap',
    fontFamily: 'Heiti SC'
  },
  albumCoverStyle: {
    height: 300,
    width: null,
    marginLeft: 10
  },
  notAvailableStyle: {
    alignSelf: 'center',
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
  },
  notAvailableViewStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    //borderColor: '#4dff88'
  },
  dueDateStyle: {
    paddingTop: 10,
    //textDecorationLine: 'underline'
  }
};

export default MoreInfo;
