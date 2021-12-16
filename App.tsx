// Vendor
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Components
import { BottomTabsNavigator } from '@moodtracker/components/BottomTabs';

// Contexts
import { MoodContextProvider } from '@moodtracker/contexts/MoodContext';

export const App: React.FC = () => {
  return (
    <MoodContextProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </MoodContextProvider>
  );
};
