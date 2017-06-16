import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Artist extends Component {
  render() {
    const { name, images, followers } = this.props.artist;
    const { imageStyle, captionStyle, cardStyle, artistStyle } = styles;

    return (
      <View style={cardStyle}>
        <TouchableOpacity>
          <Image source={{ uri: images[0].url }} style={imageStyle} />
          <Text style={artistStyle}>{name}</Text>
          <Text style={captionStyle}>{followers.total} followers</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
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
    fontWeight: '300',
    alignSelf: 'center'
  }
};

export default Artist;
