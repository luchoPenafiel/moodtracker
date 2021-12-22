// Vendor
import React, { useContext, createContext, ReactElement, ReactNode, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { MoodOptionType, MoodOptionWithTimestamp } from '@moodtracker/types/types';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const KEY = 'moodtracker-data';

const setAppData = async (data: AppData) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const response = await AsyncStorage.getItem(KEY);
    if (response) {
      return JSON.parse(response);
    }
  } catch {}

  return null;
};

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (selectedMood: MoodOptionType) => void;
  handleDeleteMood: (selectedMood: MoodOptionWithTimestamp) => void;
};

type Props = {
  children: ReactNode;
};

const MoodContext = createContext<MoodContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

export const MoodContextProvider = ({ children }: Props): ReactElement => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [...current, { mood: selectedMood, timestamp: Date.now() }];

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  const handleDeleteMood = useCallback((mood: MoodOptionWithTimestamp) => {
    setMoodList(current => {
      const newMoodList = current.filter(m => m.timestamp !== mood.timestamp);

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moodList);
      }
    })();
  }, []);

  return (
    <MoodContext.Provider value={{ moodList, handleSelectMood, handleDeleteMood }}>{children}</MoodContext.Provider>
  );
};

export const useMoodContext = () => useContext(MoodContext);
