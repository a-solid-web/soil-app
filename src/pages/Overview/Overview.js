import React from 'react';
import PropTypes from 'prop-types';

import Request from '../../components/Overview/Request';
import RequestAvatar from '../../components/Overview/RequestAvatar';
import RequestCard from '../../components/Overview/RequestCard';

import styles from './Overview.module.css';

/* eslint-disable no-console */

const Overview = ({ content }) => {
  const handleAccept = () => console.log('Accepted!');
  const handleDeny = () => console.log('Denied!');

  return (
    <div>
      <div className={styles.overview}>
        <Request>
          <RequestAvatar username="Malte Sielski" />
          <RequestCard
            text="View your mobile phone number"
            acceptAction={handleAccept}
            denyAction={handleDeny}
          />
          <RequestCard
            text="Edit your mobile phone number"
            acceptAction={handleAccept}
            denyAction={handleDeny}
          />
          <RequestCard
            text="View your mobile phone number"
            acceptAction={handleAccept}
            denyAction={handleDeny}
          />
        </Request>
        <Request>
          <RequestAvatar username="Ludwig Shubert" />
          <RequestCard
            text="View your email address"
            acceptAction={handleAccept}
            denyAction={handleDeny}
          />
        </Request>
      </div>
    </div>
  );
};

/* eslint-enable no-console */

Overview.propTypes = {
  content: PropTypes.string,
};

Overview.defaultProps = {
  content: 'RequestCard content goes here',
};

export default Overview;
