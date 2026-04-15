import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 50 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

export default function FlatListScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title} - FlatList</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#f5f5f5' },
  item: { padding: 20, marginVertical: 5, backgroundColor: '#4CAF50', borderRadius: 8 },
  text: { color: '#fff', fontSize: 16, textAlign: 'center' },
});