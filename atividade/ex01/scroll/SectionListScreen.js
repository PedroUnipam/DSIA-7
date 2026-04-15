import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const SECTIONS = [
  { title: 'Grupo A', data: ['Item A1', 'Item A2', 'Item A3'] },
  { title: 'Grupo B', data: ['Item B1', 'Item B2'] },
  { title: 'Grupo C', data: ['Item C1', 'Item C2', 'Item C3', 'Item C4'] },
];

export default function SectionListScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={SECTIONS}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#FF9800', padding: 10, marginTop: 10, borderRadius: 8 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  item: { backgroundColor: '#fff', padding: 15, marginVertical: 3, borderRadius: 5, elevation: 1 },
  itemText: { fontSize: 16, color: '#333' },
});