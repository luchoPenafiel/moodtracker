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
    <ImageBackground source={require('@moodtracker/assets/img/bg.jpeg')}>
      <MoodPicker onSelectMood={handleSelectMood} moodOptions={moodOptions} />
    </ImageBackground>
  );
};
