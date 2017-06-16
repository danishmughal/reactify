import { StackNavigator } from 'react-navigation';

// Components for Navigator
import TrackList from './components/TrackList';
import ArtistList from './components/ArtistList';

const navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: '#191B1A' },
  headerTitleStyle: { color: 'white' },
  headerBackTitleStyle: { color: 'white' },
  headerTintColor: 'white'
});

const Navigator = StackNavigator({
  Home: {
    screen: ArtistList,
    navigationOptions
  },
  TrackList: {
    screen: TrackList,
    navigationOptions
  }
});

export default Navigator;
