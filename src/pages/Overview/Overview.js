import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';
import RequestAvatar from '../../components/RequestAvatar';
import RequestCard from '../../components/RequestCard';

const Overview = ({ content }) => {
  return (
    <div>
      <RequestCard content="Hello RequestCard" />
      <RequestAvatar>
        <Avatar />
      </RequestAvatar>
    </div>
  );
};

Overview.propTypes = {
  content: PropTypes.string,
};

Overview.defaultProps = {
  content: 'RequestCard content goes here',
};

export default Overview;
