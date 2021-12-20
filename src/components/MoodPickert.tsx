// Vendor
import React, { useState, useCallback, ReactElement } from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

// Constants
import { theme } from '@moodtracker/constants/theme';

// Types
import { MoodOptionType } from '@moodtracker/types/types';

type MoodPickerProps = {
  onSelectMood: (mood: MoodOptionType) => void;
  moodOptions: MoodOptionType[];
};

const imageSrc = require('@moodtracker/assets/img/butterflies.png');

export const MoodPicker = ({ onSelectMood, moodOptions }: MoodPickerProps): ReactElement => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const [hasSelected, setHastSelected] = useState(false);

  const handleSelectedMood = useCallback(() => {
    if (selectedMood) {
      onSelectMood(selectedMood);
      setSelectedMood(undefined);
      setHastSelected(true);
    }
  }, [selectedMood, onSelectMood]);

  const handleHasSelected = useCallback(() => {
    setHastSelected(false);
  }, []);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imageSrc} />
        <Pressable style={styles.button} onPress={handleHasSelected}>
          <Text style={styles.buttonText}>Choose another</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.moodBox}>
        <Text style={styles.title}>How are you right now?</Text>
        <View style={styles.moodList}>
          {moodOptions.map((mood: MoodOptionType) => {
            return (
              <View key={mood.emoji}>
                <Pressable
                  onPress={() => setSelectedMood(mood)}
                  style={[styles.moodItem, selectedMood?.emoji === mood.emoji ? styles.moodItemSelected : undefined]}>
                  <Text>{mood.emoji}</Text>
                </Pressable>
                <Text style={styles.moodItemText}>{selectedMood?.emoji === mood.emoji && mood.description}</Text>
              </View>
            );
          })}
        </View>
        <Pressable style={styles.button} onPress={handleSelectedMood}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  moodBox: {
    margin: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  moodList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  moodItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  moodItemSelected: {
    borderWidth: 2,
    borderColor: theme.color.white,
    backgroundColor: theme.color.purple,
  },
  moodItemText: {
    color: theme.color.purple,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 150,
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: theme.color.purple,
  },
  buttonText: {
    color: theme.color.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
