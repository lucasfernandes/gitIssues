import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    height: 56 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    borderRadius: 5,
    flex: 0.95,
    padding: 10,
    color: colors.black,
    fontSize: fonts.middle,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: fonts.icon,
    color: colors.darker,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
  },
  empty: {
    color: colors.darker,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  loading: {
    paddingVertical: 10,
  },
  emptyContainer: {
    paddingTop: 0,
  },
});

export default styles;
