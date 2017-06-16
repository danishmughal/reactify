import { StackNavigator } from 'react-navigation';

// Components for Navigator
import ArtistList from './components/ArtistList';

const Navigator = StackNavigator({
  Home: { screen: ArtistList },
});

export default Navigator;
