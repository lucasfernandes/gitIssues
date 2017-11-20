import { StackNavigator } from 'react-navigation';
import Repositories from 'screens/repositories';
import Issues from 'screens/issues';

const rootNavigator = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
});

export default rootNavigator;

