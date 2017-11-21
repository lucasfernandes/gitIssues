/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Tabs extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    getIssues: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { status } = this.props;
    const tabs = [
      { id: 'all', name: 'Todas' },
      { id: 'open', name: 'Abertas' },
      { id: 'closed', name: 'Fechadas' },
    ];

    return (
      <View style={styles.container}>
        {tabs.map(tab => (
          <TouchableOpacity key={tab.id} onPress={() => this.props.getIssues(tab.id)}>
            <Text style={[styles.tab, status === tab.id && styles.active]}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
