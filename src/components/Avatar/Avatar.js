import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

const Avatar = ({ imgURL, className }) => {
  return <div className={`${styles.avatar} ${className}`} />;
};

Avatar.propTypes = {
  imgURL: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  imgURL: '',
  className: '',
};

export default Avatar;
