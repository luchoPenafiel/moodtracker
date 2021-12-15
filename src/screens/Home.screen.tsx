// Vendor
import React, { useState, useCallback, ReactElement } from 'react';
import { Text, View } from 'react-native';
import { format } from 'date-fns';

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
      { mood: selectedMood, timestamp: Date.now() },
    ]);

    console.log(moodList);
  }, []);

  return (
    <View>
      <MoodPicker onSelectMood={handleSelectMood} moodOptions={moodOptions} />
      <View>
        {moodList.map((item: any) => {
          return (
            <Text key={item.timestame}>
              {item.mood.description}{' '}
              {format(new Date(item.timestamp), "d MMM, yyyy 'at' hh:mm aa")}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
