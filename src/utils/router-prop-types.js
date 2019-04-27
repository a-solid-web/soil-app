import PropTypes from 'prop-types';

/* Taken from: https://github.com/Wobbly-Wibbly/react-router-props/blob/master/index.js */

export const locationShape = PropTypes.shape({
  hash: PropTypes.string,
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
});

export const historyShape = PropTypes.shape({
  action: PropTypes.string.isRequired,
  block: PropTypes.func.isRequired,
  createHref: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  listen: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
});

export const matchShape = PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  params: PropTypes.object,
});
