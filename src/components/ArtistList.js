import React, { Component } from 'react';
import { View, Text, ListView, LayoutAnimation, UIManager } from 'react-native';
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

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.linear();
  }

  createDataSource({ artists }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(artists);
  }

  searchArtist() {
    console.log('searching');
    this.props.fetchArtists();
  }


  renderRow(artist) {
    if (artist.images.length > 0) {
      return <Artist artist={artist} />;
    }
    return null;
  }

  renderList() {
    if (this.props.loading) {
      return <Text>Loading....</Text>;
    } else if (this.props.artists.length <= 0) {
      return <Text>Nothing found</Text>;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
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
