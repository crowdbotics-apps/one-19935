import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList96519Navigator from '../features/NotificationList96519/navigator';
import Settings96518Navigator from '../features/Settings96518/navigator';
import Settings96510Navigator from '../features/Settings96510/navigator';
import UserProfile96508Navigator from '../features/UserProfile96508/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList96519: { screen: NotificationList96519Navigator },
Settings96518: { screen: Settings96518Navigator },
Settings96510: { screen: Settings96510Navigator },
UserProfile96508: { screen: UserProfile96508Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
