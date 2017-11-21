/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { metrics } from 'styles';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      fullName: PropTypes.string,
      organization: PropTypes.string,
      avatarUrl: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static state = {}

  render() {
    const { repository } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity onPress={() => navigate('Issues', { title: repository.name, fullName: repository.fullName })}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{ uri: repository.avatarUrl }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{repository.name}</Text>
            <Text style={styles.sub}>{repository.organization}</Text>
          </View>
          <Icons name="angle-right" size={metrics.iconSize} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  }
}
