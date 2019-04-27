import React from 'react';
import PropTypes from 'prop-types';

import Request from '../../components/Overview/Request';

const Overview = ({ content }) => {
  return (
    <div>
      <Request />
      <Request username="Denis" requestAction="Give me content madafaka" />
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
