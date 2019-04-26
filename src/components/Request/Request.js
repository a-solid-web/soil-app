import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.module.css';

const Request = ({ children }) => {
  return <div className={styles.requestTab}>{children}</div>;
};

Request.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Request;
