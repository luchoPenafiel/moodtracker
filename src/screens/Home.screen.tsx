// Vendor
import React, { useState, useCallback, ReactElement } from 'react';
import { View } from 'react-native';

// Constants
import { moodOptions } from '@moodtracker/constants/moods';

// Components
import { MoodPicker } from '@moodtracker/components/MoodPickert.component';

// Types
import {
  MoodOptionType,
  MoodOptionWithTimestamp,
} from '@moodtracker/types/types';

export const Home = (): ReactElement => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestame: Date.now() },
    ]);
  }, []);

  return (
    <View>
      <MoodPicker onSelectMood={handleSelectMood} moodOptions={moodOptions} />
    </View>
  );
};
