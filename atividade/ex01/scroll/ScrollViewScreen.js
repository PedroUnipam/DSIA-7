import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function ScrollViewScreen() {
  return (
    <ScrollView style={styles.container}>
      {[...Array(30)].map((_, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.text}>Item {i + 1} - ScrollView</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  item: { padding: 20, marginVertical: 5, backgroundColor: '#4A90E2', borderRadius: 8 },
  text: { color: '#fff', fontSize: 16, textAlign: 'center' },
});