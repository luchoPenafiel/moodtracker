// Vendor
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Components
import { BottomTabsNavigator } from '@moodtracker/components/BottomTabs';

// Contexts
import { MoodContextProvider } from '@moodtracker/contexts/MoodContext';

import { Platform, UIManager } from 'react-native';

/**
 * LayoutAnimation is enabled by default on iOS, but it's still experimental on Android.
 * In order to enable LayoutAnimation on Android do this
 */
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  return (
    <MoodContextProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </MoodContextProvider>
  );
};
