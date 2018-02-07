import { TabNavigator } from 'react-navigation';
import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import LogOut from './LogOut';
import MenuIcon from './MenuIcon';

const Navigation = TabNavigator({
    List: { screen: AllBooks },
    My: { screen: MyBooks },
    Out: { screen: LogOut }
  },
  {
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

export default Navigation;
