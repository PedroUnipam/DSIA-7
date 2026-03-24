import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importações dos componentes
import ModalSlide from '../modal/ModalSlide';
import ModalFade from '../modal/ModalFade';
import ModalNone from '../modal/ModalNone';

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
  return (
    // Removidos: SafeAreaProvider e NavigationContainer
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name="SLIDE">
        {() => <ModalSlide animation="slide" themeColor="#2196F3" />}
      </Tab.Screen>
      
      <Tab.Screen name="FADE">
        {() => <ModalFade animation="fade" themeColor="#4CAF50" />}
      </Tab.Screen>
      
      <Tab.Screen name="NONE">
        {() => <ModalNone animation="none" themeColor="#FF9800" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}