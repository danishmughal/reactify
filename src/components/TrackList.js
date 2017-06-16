import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { loadArtistTracks } from '../actions';


class TrackList extends Component {
  static navigationOptions = {
    headerTitle: 'TrackList'
  }

  componentWillMount() {
    console.log(this.props);
    this.props.loadArtistTracks(this.props.navigation.state.params.artist);
  }

  render() {
    return (
      <View>
        <Text>View tracks from an artist</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { tracks } = state;
  return { tracks };
};

export default connect(mapStateToProps, { loadArtistTracks })(TrackList);
