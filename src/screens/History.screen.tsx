// Vendor
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Context
import { useMoodContext } from '@moodtracker/contexts/MoodContext';

// Components
import { MoodItemRow } from '@moodtracker/components/MoodItemRow';

export const History = (): ReactElement => {
  const { moodList } = useMoodContext();

  return (
    <View>
      {moodList.map((item: any) => {
        return <MoodItemRow key={item.timestamp} item={item} />;
      })}
    </View>
  );
};
