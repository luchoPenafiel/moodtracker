// Vendor
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Constants
import { moodOptions } from '@moodtracker/constants/moods';

// Components
import { MoodPicker } from '@moodtracker/components/MoodPickert';

// Contexts
import { useMoodContext } from '@moodtracker/contexts/MoodContext';

export const Home = (): ReactElement => {
  const { handleSelectMood } = useMoodContext();

  return (
    <View>
      <MoodPicker onSelectMood={handleSelectMood} moodOptions={moodOptions} />
    </View>
  );
};
