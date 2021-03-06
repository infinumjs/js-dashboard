import React, {Component} from 'react';
import classnames from 'classnames';

import styles from './style.scss';

export default class Empty extends Component {
  render() {
    const {className} = this.props;

    return (
      <div className={classnames(className, styles.main)}>I'm empty!</div>
    );
  }
}
