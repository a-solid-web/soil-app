import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';
import RequestAvatar from '../../components/RequestAvatar';
import RequestCard from '../../components/RequestCard';
import Request from '../../components/Request';

const Overview = ({ content }) => {
  return (
    <div>
      <Request>
        <RequestAvatar username="Someone">
          <Avatar />
        </RequestAvatar>
        <RequestCard content="Hello RequestCard 1" />
        <RequestCard content="Hello RequestCard 2" />
        <RequestCard content="Hello RequestCard 3" />
      </Request>
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
