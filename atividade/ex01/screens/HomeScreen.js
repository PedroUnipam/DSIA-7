import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeStyles } from '../styles/HomeStyles';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.titulo}>Bem-vindo!</Text>
      <Text style={HomeStyles.mensagem}>
        Utilize o menu de navegação lateral para acessar os modais e scrolls.
      </Text>
      <TouchableOpacity
        style={{ marginTop: 20, padding: 15, backgroundColor: '#4A90E2', borderRadius: 8 }}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>ABRIR MENU</Text>
      </TouchableOpacity>
    </View>
  );
}