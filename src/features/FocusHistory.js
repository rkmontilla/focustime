import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) return <Text style={styles.noFocus}>We haven't focused on anything yet</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Things we've focused on:</Text>
        <FlatList data={history} renderItem={renderItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: spacing.sm,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    marginLeft: spacing.xxl,
    marginTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    marginLeft: spacing.lg,
  },
  noFocus: {
    color: colors.white,
    fontSize: fontSizes.lg,
    marginLeft: spacing.lg,
    marginRight: spacing.xxxl
  }
});

export default FocusHistory;
