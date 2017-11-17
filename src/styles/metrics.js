import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  globalWidth: width,
};
