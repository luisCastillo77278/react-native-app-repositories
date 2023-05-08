import { View, Text, StyleSheet, Image } from 'react-native';
import { Platform } from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 21,
    color: '#1f2937',
  },
  description: {
    fontSize: 16,
    color: '#374151',
  },
  language: {
    backgroundColor: Platform.select({
      ios: '#3b82f6',
      android: '#6366f1',
    }),
    borderRadius: 5,
    alignSelf: 'flex-start',
    padding: 5,
    overflow: 'hidden',
    color: '#ffff',
  },
  content: {
    flex: 1,
    gap: 5,
  },
});

const CardRepository = ({ item }) => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: item.ownerAvatarUrl,
        }}
        alt={item.fullName}
        style={style.image}
      />

      <View style={style.content}>
        <Text style={style.title}>{item.fullName}</Text>
        <Text style={style.description}>{item.description}</Text>
        <Text style={style.language}>{item.language}</Text>
      </View>
    </View>
  );
};

export default CardRepository;
