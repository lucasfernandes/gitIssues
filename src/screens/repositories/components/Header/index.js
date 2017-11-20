/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    addRepository: PropTypes.func.isRequired,
    // loading: PropTypes.bool.isRequired,
  }

  state = {
    searchForRepo: '',
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Repositório"
          placeholderTextColor={colors.dark}
          style={styles.textInput}
          onChangeText={searchForRepo => this.setState({ searchForRepo })}
        />
        <TouchableOpacity onPress={() => this.props.addRepository(this.state.searchForRepo)}>
          <Icons name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
