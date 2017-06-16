import React, { Component } from 'react';
import { View, Text, FlatList, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';

import { SearchBar } from 'react-native-elements';
import { updateSearch, submitSearch } from '../actions';

import Artist from './Artist';

class ArtistList extends Component {
  static navigationOptions = {
    title: 'Reactify',
    headerStyle: { backgroundColor: '#191B1A' },
    headerTitleStyle: { color: 'white' }
  };

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.linear();
  }

  searchArtist() {
    this.props.fetchArtists();
  }

  keyExtractor = (item) => item.id;
  renderRow = (artist) => {
    if (artist.images.length > 0) {
      return <Artist id={artist.id} artist={artist} />;
    }
    return null;
  }

  renderList() {
    if (this.props.loading) {
      return <Text style={styles.placeholderStyle}>Loading....</Text>;
    } else if (this.props.artists.length <= 0) {
      return <Text style={styles.placeholderStyle}>Nothing found - try searching.</Text>;
    }

    return (
      <FlatList
        data={this.props.artists}
        keyExtractor={this.keyExtractor}
        renderItem={(rowData) => this.renderRow(rowData.item)}
        style={{ paddingTop: 35 }}
      />
    );
  }


  render() {
    const { searchBarContainerStyle, searchBarInputStyle, backgroundStyle } = styles;

    return (
      <View style={backgroundStyle}>
        <SearchBar
          onChangeText={searchterm => this.props.updateSearch(searchterm)}
          placeholder="Search for an Artist..."
          containerStyle={searchBarContainerStyle}
          inputStyle={searchBarInputStyle}
          returnKeyType="search"
          onSubmitEditing={event => this.props.submitSearch(event.nativeEvent.text)}
        />
        {this.renderList()}
      </View>
    );
  }
}

const styles = {
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
  searchBarContainerStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#191B1A'
  },
  searchBarInputStyle: {
    color: '#88898D'
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
