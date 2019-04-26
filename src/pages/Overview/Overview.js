import React from 'react';
import PropTypes from 'prop-types';
import RequestCard from '../../components/RequestCard';
import Avatar from '../../components/Avatar';

const Overview = ({ content }) => {
  return (
    <div>
      <RequestCard content="Hello RequestCard" />
      <Avatar />
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
