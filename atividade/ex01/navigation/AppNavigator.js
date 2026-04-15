import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator'; 

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HOME">
      <Drawer.Screen name="HOME" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="Modal" component={ModalTabsNavigator} options={{ title: 'Modal' }} />
      {ScrollTabsNavigator && <Drawer.Screen name="Scroll" component={ScrollTabsNavigator} options={{ title: 'Scroll' }} />}
    </Drawer.Navigator>
  );
}