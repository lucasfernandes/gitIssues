/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { metrics } from 'styles';

import styles from './styles';

export default class Issue extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }).isRequired,
    }).isRequired,
    // navigation: PropTypes.shape({
    //   navigate: PropTypes.func,
    // }).isRequired,
  };

  static state = {}

  render() {
    const { title, user: { login, avatar_url } } = this.props.issue;
    // const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{ uri: avatar_url }}
          />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text style={styles.sub}>{login}</Text>
          </View>
          <Icons name="angle-right" size={metrics.iconSize} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  }
}
