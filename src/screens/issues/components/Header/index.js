/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  state = {

  }

  render() {
    console.tron.log(this.props);
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icons name="chevron-left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}
