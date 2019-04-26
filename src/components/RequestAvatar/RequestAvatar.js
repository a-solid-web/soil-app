import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestAvatar.module.css';

const RequestAvatar = ({ username, className, children }) => {
  return (
    <div className={`${styles.requestAvatar} ${className}`}>
      {children}
      <div className={styles.requestParagraph}>
        <span className={styles.requestUsername}>{username}</span>
        <span> wants to:</span>
      </div>
    </div>
  );
};

RequestAvatar.propTypes = {
  username: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RequestAvatar.defaultProps = {
  username: 'John Doe',
  className: '',
};

export default RequestAvatar;
