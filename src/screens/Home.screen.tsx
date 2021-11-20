// Vendor
import React from 'react';
import { View } from 'react-native';

// Components
import { MoodPickert } from '@moodtracker/components/MoodPickert.component';

export const Home: React.FC = () => {
  return (
    <View>
      <MoodPickert />
    </View>
  );
};
