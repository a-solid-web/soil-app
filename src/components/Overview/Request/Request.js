import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.module.css';

import AvatarRequest from '../RequestAvatar';
import RequestCard from '../RequestCard';

const Request = ({ avatarImgUrl, username, requestAction, className }) => (
  <div className={`${styles.requestTab} ${className}`}>
    <AvatarRequest avatarImgUrl={avatarImgUrl} username={username} />
    <RequestCard requestAction={requestAction} />
  </div>
);

Request.propTypes = {
  avatarImgUrl: PropTypes.string,
  username: PropTypes.string,
  requestAction: PropTypes.string,
  className: PropTypes.string,
};

Request.defaultProps = {
  avatarImgUrl: '',
  username: 'John Doe',
  requestAction: 'Action content goes here',
  className: '',
};

export default Request;
