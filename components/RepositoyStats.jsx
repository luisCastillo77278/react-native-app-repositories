import { StyleSheet, View, Text } from 'react-native';

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}K` : value;
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
  },
  subtitle: {
    color: '#374151',
    fontSize: 15,
  },
});

const RepositoryStats = ({ item }) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{parseThousands(item.forksCount)}</Text>
        <Text style={style.subtitle}>Start</Text>
      </View>
      <View>
        <Text style={style.title}>{parseThousands(item.stargazersCount)}</Text>
        <Text style={style.subtitle}>Forks</Text>
      </View>
      <View>
        <Text style={style.title}>{parseThousands(item.reviewCount)}</Text>
        <Text style={style.subtitle}>Reviews</Text>
      </View>
      <View>
        <Text style={style.title}>{parseThousands(item.ratingAverage)}</Text>
        <Text style={style.subtitle}>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;
