import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';

// Telas existentes
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';

// Novas telas
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FormScreen from '../screens/FormScreen';
import ListScreen from '../screens/ListScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainDrawer() {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  const LogoutHeaderButton = () => (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sair</Text>
    </TouchableOpacity>
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#888',
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        headerRight: () => <LogoutHeaderButton />,
      }}
      initialRouteName="HOME"
    >
      <Drawer.Screen name="HOME" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="Modal" component={ModalTabsNavigator} options={{ title: 'Modal' }} />
      <Drawer.Screen name="Scroll" component={ScrollTabsNavigator} options={{ title: 'Scroll' }} />
      <Drawer.Screen name="Registrar Aluguel" component={FormScreen} />
      <Drawer.Screen name="Lista de Aluguéis" component={ListScreen} />
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}