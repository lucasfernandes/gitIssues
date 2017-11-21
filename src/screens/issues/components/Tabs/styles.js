import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    backgroundColor: colors.dusk,
    borderRadius: 5,
    margin: 20,
    marginBottom: 10,
    // marginTop: 20,
  },
  tab: {
    color: colors.dark,
    fontSize: fonts.small,
  },
  active: {
    fontWeight: 'bold',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default styles;
