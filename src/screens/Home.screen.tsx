// Vendor
import React, { ReactElement } from 'react';
import { ImageBackground } from 'react-native';

// Constants
import { moodOptions } from '@moodtracker/constants/moods';

// Components
import { MoodPicker } from '@moodtracker/components/MoodPickert';

// Contexts
import { useMoodContext } from '@moodtracker/contexts/MoodContext';

export const Home = (): ReactElement => {
  const { handleSelectMood } = useMoodContext();

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1639909280895-9c84d26d917e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
      }}>
      <MoodPicker onSelectMood={handleSelectMood} moodOptions={moodOptions} />
    </ImageBackground>
  );
};
