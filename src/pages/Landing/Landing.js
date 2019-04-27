import React from 'react';
import PropTypes from 'prop-types';

import styles from './Landing.module.css';

const Landing = ({ children }) => {
  return <div className={styles.landing}>{children}</div>;
};

Landing.propTypes = {
  children: PropTypes.node,
};

Landing.defaultProps = {
  children: null,
};

export default Landing;
