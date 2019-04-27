import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'yoda-design-system';
import styles from './RequestCard.module.css';

const RequestCard = ({ requestAction, className }) => {
  return (
    <Card className={`${styles.cardContainer} ${className}`}>
      <div className={`${styles.requestActionContainer}`}>
        <p>{requestAction}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="outlined" className={styles.acceptButton}>
          Accept
        </Button>
        <Button variant="outlined" className={styles.denyButton}>
          Deny
        </Button>
      </div>
    </Card>
  );
};

RequestCard.propTypes = {
  requestAction: PropTypes.string,
  className: PropTypes.string,
};

RequestCard.defaultProps = {
  requestAction: 'Action content goes here',
  className: PropTypes.string,
};

export default RequestCard;
