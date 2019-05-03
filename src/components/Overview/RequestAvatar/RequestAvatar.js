import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestAvatar.module.css';

import Avatar from '../../Avatar';

const RequestAvatar = ({ avatarImgUrl, username, className }) => {
  return (
    <div className={`${styles.requestAvatar} ${className}`}>
      <Avatar imgUrl={avatarImgUrl} />
      <div className={styles.text}>
        <span className={styles.requestUsername}>{username}</span>
        <span className={styles.wantsTo}> wants to:</span>
      </div>
    </div>
  );
};

RequestAvatar.propTypes = {
  username: PropTypes.string,
  className: PropTypes.string,
  avatarImgUrl: PropTypes.string,
};

RequestAvatar.defaultProps = {
  username: 'John Doe',
  className: '',
  avatarImgUrl: '',
};

export default RequestAvatar;
