import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { SearchBar, Card } from 'react-native-elements';
import { updateSearch, submitSearch } from '../actions';

class ArtistList extends Component {
  static navigationOptions = {
    title: 'Reactify',
    headerStyle: { backgroundColor: '#393E43' },
    headerTitleStyle: { color: 'white' }
  };

  searchArtist() {
    console.log('searching');
    this.props.fetchArtists();
  }

  renderList() {
    if (this.props.loading) {
      return <Text>Loading....</Text>;
    }

    return (
      <Text>DONE!</Text>
    );
  }


  render() {
    const { searchBarContainerStyle } = styles;

    return (
      <View>
        <SearchBar
          round
          onChangeText={searchterm => this.props.updateSearch(searchterm)}
          placeholder="Search for an Artist..."
          containerStyle={searchBarContainerStyle}
          returnKeyType="search"
          onSubmitEditing={searchterm => this.props.submitSearch(searchterm)}
        />
        {this.renderList()}
      </View>
    );
  }
}

const styles = {
  searchBarContainerStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
};

const mapStateToProps = (state) => {
  const { loading } = state.artists;
  return { loading };
};

export default connect(mapStateToProps, { updateSearch, submitSearch })(ArtistList);
