/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

/* Presentational */
import { View, FlatList, RefreshControl, ActivityIndicator, Text, AsyncStorage } from 'react-native';
import { colors } from 'styles';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Issue from './components/Issue';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: ({ scene, navigation }) => (
      <Header
        title={scene.route.params.title}
        back={() => navigation.goBack()}
      />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          fullName: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {};

  state = {
    status: 'all',
    loading: false,
    refreshing: false,
    error: false,
    issues: [],
    repo: '',
  }

  componentWillMount() {
    this.setInitialStates().then(() =>
      this.loadIssues().then(() => this.setState({ loading: false })));
  }

  async componentWillUnmount() {
    await AsyncStorage.setItem('@GitIssues:status', this.state.status);
  }

  getIssues = (status) => {
    this.setState({ status, loading: true }, () => {
      this.loadIssues()
        .then(() => { this.setState({ loading: false }); })
        .catch(() => { this.setState({ error: true, loading: false }); });
    });
  }

  setInitialStates = async () => {
    const { fullName } = this.props.navigation.state.params;

    const status = await AsyncStorage.getItem('@GitIssues:status');
    this.setState({ status, loading: true, repo: fullName });
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { status, repo } = this.state;
    const response = await api.get(`repos/${repo}/issues?state=${status}`);

    this.setState({ refreshing: false, issues: response.data });
  }

  filterIssues = issues => issues.filter(issue => (issue.state === this.state.status));

  toogleRender = () => (
    this.state.issues.length > 0
      ? this.renderIssues()
      : this.showError()
  )

  showError = () => (
    <Text style={styles.error}>Weeiirrlll... nenhuma Issue foi encontrada aqui.</Text>
  );

  renderIssues = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadIssues}
        />
      }
      style={[styles.flatRepositories, this.state.error && styles.emptyContainer]}
      data={this.state.issues}
      keyExtractor={issue => issue.id}
      renderItem={({ item }) => <Issue issue={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Tabs
          status={this.state.status}
          getIssues={this.getIssues}
        />
        { this.state.loading
          ? <ActivityIndicator size="large" color={colors.black} style={styles.loading} />
          : this.toogleRender()}
      </View>
    );
  }
}
