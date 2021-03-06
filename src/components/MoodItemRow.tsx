// Vendor
import React, { ReactElement, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation } from 'react-native';
import format from 'date-fns/format';

// Types
import { MoodOptionWithTimestamp } from '../types/types';

// Constants
import { theme } from '../constants/theme';
import { useMoodContext } from '@moodtracker/contexts/MoodContext';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow = ({ item }: MoodItemRowProps): ReactElement => {
  const { handleDeleteMood } = useMoodContext();

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(item);
  }, [handleDeleteMood, item]);

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>{format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}</Text>
      <Pressable onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    fontFamily: theme.font.regular,
    color: theme.color.purple,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.color.purple,
    fontFamily: theme.font.bold,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    fontFamily: theme.font.bold,
    color: 'red',
  },
});
