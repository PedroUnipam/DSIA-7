import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  function HomeScreen() { 
    return ( 
      <View style={styles.container}> 
        <Text style={styles.title}>Hello World 👋 🌍!</Text>
        <Pressable style={styles.button} onPress={() => alert('Pedro presente!')}>
          <Text style={styles.buttonText}>Clique aqui e o professor fará a chamada</Text>
        </Pressable>
      </View> 
    ); 
  }
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00d4ff',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
  },
});
