// Vendor
import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

// Constants
import { moodOptions } from '@moodtracker/constants/moods';
import { theme } from '@moodtracker/constants/theme';

// Types
import { MoodOptionType } from '@moodtracker/types/moodOptions';

export const MoodPickert: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

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
                  style={[
                    styles.moodItem,
                    selectedMood?.emoji === mood.emoji
                      ? styles.moodItemSelected
                      : undefined,
                  ]}>
                  <Text>{mood.emoji}</Text>
                </Pressable>
                <Text style={styles.moodItemText}>
                  {selectedMood?.emoji === mood.emoji && mood.description}
                </Text>
              </View>
            );
          })}
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
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
    borderWidth: 2,
    borderColor: theme.color.purple,
    borderRadius: 10,
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