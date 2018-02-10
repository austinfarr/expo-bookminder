import { DrawerNavigator } from 'react-navigation';
import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import LogOut from './LogOut';
import FeedbackForm from './FeedbackForm';
import LibraryLayout from './LibraryLayout';

const NewNavigation = DrawerNavigator({
    'Browse Books': {
      path: '/',
      screen: AllBooks
    },
    'My Books': {
      path: '/sent',
      screen: MyBooks
    },
    Feedback: {
      path: '/',
      screen: FeedbackForm
    },
    'Library Layout': {
      path: '/',
      screen: LibraryLayout
    },
    'Log Out': {
      path: '/',
      screen: LogOut
    }

  },
  {
    initialRouteName: 'Browse Books',
    drawerPosition: 'left',
    tabBarOptions: {
      activeTintColor: '#000099',
      inactiveTintColor: '#7575a3',
      labelStyle: {
        fontSize: 18,
        fontFamily: 'Heiti SC'
    },
    style: {
      backgroundColor: '#d2dae2',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: 10
    }
    }
  }
);

export default NewNavigation;
