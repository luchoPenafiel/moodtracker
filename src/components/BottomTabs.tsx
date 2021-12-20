// Vendor
import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home, History, Analytics } from '@moodtracker/screens';
import { Text } from 'react-native';
import { HomeIcon } from './icons/Home';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = (): ReactElement => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <HomeIcon size={20} />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
