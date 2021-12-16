// Vendor
import React, { useContext, createContext, ReactElement, ReactNode, useState, useCallback } from 'react';

// Types
import { MoodOptionType, MoodOptionWithTimestamp } from '@moodtracker/types/types';

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (selectedMood: MoodOptionType) => void;
};

type Props = {
  children: ReactNode;
};

const MoodContext = createContext<MoodContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

export const MoodContextProvider = ({ children }: Props): ReactElement => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => [...current, { mood: selectedMood, timestamp: Date.now() }]);
  }, []);

  return <MoodContext.Provider value={{ moodList, handleSelectMood }}>{children}</MoodContext.Provider>;
};

export const useMoodContext = () => useContext(MoodContext);
