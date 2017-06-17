import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

import { connect } from 'react-redux';
import { loadArtistTracks, loadTrack } from '../actions';

import Deck from './Deck';

const SCREEN_WIDTH = Dimensions.get('window').width;

class TrackList extends Component {
  static navigationOptions = {
    headerTitle: 'TrackList'
  }

  componentWillMount() {
    console.log(this.props);
    this.props.loadArtistTracks(this.props.navigation.state.params.artist);
  }

  renderCard(track) {
    if (track.album.images.length > 0) {
      return (
        <View style={styles.cardStyle} key={track.id}>
          <Image source={{ uri: track.album.images[0].url }} style={styles.imageStyle} />
          <Text style={styles.artistStyle}>{track.name}</Text>
          <Text style={styles.captionStyle}>{track.album.name}</Text>
        </View>
      );
    }
    return null;
  }

  renderList() {
    if (this.props.loading) {
      return (
        <Text style={styles.placeholderStyle}>Loading....</Text>
      );
    }
    return (
      <Deck
        data={this.props.tracks}
        renderCard={this.renderCard}
        renderNoCards={this.renderNoCards}
        updateCurrentTrack={track => this.props.loadTrack(track)}
      />
    );
  }

  renderAudio() {
    if (this.props.currentTrack) {
      return <Text style={styles.captionStyle}>{this.props.currentTrack.name}</Text>;
    }
    return (
      <Text>Audio Player</Text>
    );
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <View style={{flex: 1}}>
          {this.renderList()}
        </View>
        <View style={styles.audioStyle}>
          {this.renderAudio()}
        </View>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 35
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35
  },
  imageStyle: {
    width: SCREEN_WIDTH - (SCREEN_WIDTH * 0.1),
    height: SCREEN_WIDTH - (SCREEN_WIDTH * 0.3),
    marginBottom: 10
  },
  artistStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    lineHeight: 20
  },
  captionStyle: {
    fontSize: 13,
    color: 'white',
    fontWeight: '300'
  },
  placeholderStyle: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#88898D',
    fontWeight: 'bold',
    fontSize: 16
  },
  audioStyle: {
    alignSelf: 'center',
    paddingBottom: 100
  }
};


const mapStateToProps = (state) => {
  const { tracks, loading, currentTrack } = state.tracks;
  return { tracks, loading, currentTrack };
};

export default connect(mapStateToProps, { loadArtistTracks, loadTrack })(TrackList);
