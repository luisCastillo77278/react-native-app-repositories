import { View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { theme } from '../theme';
import { Link, useLocation } from 'react-router-native';

const style = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  link: {
    fontSize: theme.fontSize.subheading,
    fontWeight: theme.fontWeights.bold,
    color: '#a1a1aa',
    marginHorizontal: 5,
  },
  scrollview: {
    padding: 20,
  },
  active: {
    color: '#ffff',
  },
});

const AppBarTab = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const styles = [style.link, active && style.active];
  return (
    <Link to={to}>
      <Text style={styles}>{children}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={style.container}>
      <ScrollView style={style.scrollview} horizontal={true}>
        <AppBarTab to="/home">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
