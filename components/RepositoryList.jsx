import { StyleSheet, FlatList, View } from 'react-native';
import { repositories } from '../mocks/repositories';
import RepositoryItem from './RepositoryItem';

const style = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={style.separator} />;

const RepositoryList = () => {
  return <FlatList data={repositories} ItemSeparatorComponent={ItemSeparator} renderItem={RepositoryItem} />;
};
export default RepositoryList;
