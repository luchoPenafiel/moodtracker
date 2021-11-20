import { BottomTabsNavigator } from '@moodtracker/components/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
