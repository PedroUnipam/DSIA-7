import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import homeScreen from './screens/homeScreen';
import ModalSlide from './modal/ModalSlide';
import ModalFade from './modal/ModalFade';
import ModalNone from './modal/ModalNone';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#4A90E2',
            tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
          }}
        >
          <Tab.Screen name="HOME" component={homeScreen} />
          <Tab.Screen name="SLIDE" component={ModalSlide} />
          <Tab.Screen name="FADE" component={ModalFade} />
          <Tab.Screen name="NONE" component={ModalNone} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
