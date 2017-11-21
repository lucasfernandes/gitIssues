/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.func.isRequired,
  }
  state = {}

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => this.props.back()}>
          <Icons name="chevron-left" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
