import React from 'react';
import { View, StyleSheet } from 'react-native';

import RepositoryStats from './RepositoyStats';
import CardRepository from './CardRepository';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    gap: 18,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={style.container}>
      <CardRepository item={item} />
      <RepositoryStats item={item} />
    </View>
  );
};

export default RepositoryItem;
