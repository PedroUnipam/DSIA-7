import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importações ajustadas à sua estrutura de pastas
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';


const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="HOME"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#4A90E2',
      }}
    >
      <Drawer.Screen name="HOME" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="ModalTabsNavigator" component={ModalTabsNavigator} options={{ title: 'Modal' }} />
    </Drawer.Navigator>
  );
}