/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';

import Header from './components/Header';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header title={navigation.state.routes[1].params.title} />
    ),
  };

  static propTypes = {};

  static defaultProps = {};

  static state = {}

  render() {
    return (
      <View />
    );
  }
}
