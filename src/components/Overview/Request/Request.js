import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.module.css';

const Request = ({ className, children }) => (
  <div className={`${styles.requestTab} ${className}`}>{children}</div>
);

Request.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Request.defaultProps = {
  className: '',
};

export default Request;
