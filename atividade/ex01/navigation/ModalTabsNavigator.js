import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importamos nosso componente externo
import ModalSlide from './modal/ModalSlide';
import ModalFade from './modal/ModalFade';
import ModalNone from './modal/ModalNone';

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
          }}
        >
          {/* 
              ATO FINAL: Criamos as três abas.
              Cada uma reutiliza o CustomModalScreen, mas com animações distintas.
          */}
          
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
}