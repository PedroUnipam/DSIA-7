import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScrollViewScreen from '../scroll/ScrollViewScreen';
import FlatListScreen from '../scroll/FlatListScreen';
import SectionListScreen from '../scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function ScrollTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="SectionList" component={SectionListScreen} />
    </Tab.Navigator>
  );
}