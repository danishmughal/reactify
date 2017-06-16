import React, { Component } from 'react';
import { View, Text, ListView, FlatList, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';

import { SearchBar } from 'react-native-elements';
import { updateSearch, submitSearch } from '../actions';

import Artist from './Artist';

class ArtistList extends Component {
  static navigationOptions = {
    title: 'Reactify',
    headerStyle: { backgroundColor: '#282828' },
    headerTitleStyle: { color: 'white' }
  };

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.linear();
  }

  searchArtist() {
    console.log('searching');
    this.props.fetchArtists();
  }

  keyExtractor = (item, index) => item.id;
  renderRow = (artist) => {
    console.log(artist);
    if (artist.images.length > 0) {
      return <Artist id={artist.id} artist={artist} />;
    }
    return null;
  }

  renderList() {
    if (this.props.loading) {
      return <Text style={{ color: 'white' }}>Loading....</Text>;
    } else if (this.props.artists.length <= 0) {
      return <Text style={{ color: 'white' }}>Nothing found</Text>;
    }

    return (
      <FlatList
        data={this.props.artists}
        keyExtractor={this.keyExtractor}
        renderItem={(rowData) => this.renderRow(rowData.item)}
      />
    );
  }


  render() {
    const { searchBarContainerStyle, backgroundStyle } = styles;

    return (
      <View style={backgroundStyle}>
        <SearchBar
          round
          onChangeText={searchterm => this.props.updateSearch(searchterm)}
          placeholder="Search for an Artist..."
          containerStyle={searchBarContainerStyle}
          returnKeyType="search"
          onSubmitEditing={event => this.props.submitSearch(event.nativeEvent.text)}
        />
        {this.renderList()}
      </View>
    );
  }
}

const styles = {
  searchBarContainerStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#282828',
    marginBottom: 35
  },
  backgroundStyle: {
    backgroundColor: 'black',
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { loading, artists } = state.artists;
  return { loading, artists };
};

export default connect(mapStateToProps, { updateSearch, submitSearch })(ArtistList);
