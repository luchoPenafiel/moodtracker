// Vendor
import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import groupBy from 'lodash/groupBy';

// Context
import { useMoodContext } from '@moodtracker/contexts/MoodContext';
import { theme } from '@moodtracker/constants/theme';

export const Analytics = (): ReactElement => {
  const moodContext = useMoodContext();

  const data = Object.entries(groupBy(moodContext.moodList, 'mood.emoji')).map(([key, value]) => ({
    x: key,
    y: value.length,
  }));

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[theme.color.purple, theme.color.lavender, theme.color.blue, theme.color.grey, theme.color.white]}
        style={{ labels: { fontSize: 30 } }}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
