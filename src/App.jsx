import React, { Component } from 'react';
import logo from './assets/images/logo-maxkalik.svg';
import styles from './assets/styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { spinner: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ spinner: false }), 1000);
  }

  render() {
    if (this.state.spinner) {
      return null;
    }

    return (
      <div className={styles.main}>
        <img className={styles.logo} src={logo} alt="logo maxkalik.com" />
        <h1>A simple react template</h1>
        <p>© 2019 <a href="http://www.maxkalik.com">maxkalik.com</a></p>
      </div>
    );
  }
}
