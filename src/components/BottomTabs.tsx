// Vendor
import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home, History, Analytics } from '@moodtracker/screens';
import { Text } from 'react-native';
import { HomeIcon } from './icons/Home';
import { AnalyticsIcon } from './icons/Analitycs';
import { HistoryIcon } from './icons/History';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = (): ReactElement => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} options={{ title: "Today's mood" }} />
      <BottomTabs.Screen name="History" component={History} options={{ title: 'Past moods' }} />
      <BottomTabs.Screen name="Analytics" component={Analytics} options={{ title: 'Analytics' }} />
    </BottomTabs.Navigator>
  );
};
