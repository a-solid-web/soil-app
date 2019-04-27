import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

const Avatar = ({ imgURL, className }) => (
  <div className={`${styles.avatar} ${className}`}>
    <img className={styles.avatarURL} src={imgURL} alt="sajas" />
  </div>
);

Avatar.propTypes = {
  imgURL: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  imgURL:
    'https://www.va.gov/va_files/2014/responsive/images/slider/images/arrow-left.png',
  className: '',
};

export default Avatar;
