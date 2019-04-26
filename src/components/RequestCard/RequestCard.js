import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'yoda-design-system';
import styles from './RequestCard.module.css';

const RequestCard = ({ content }) => {
  return (
    <Card className={styles.cardContainer}>
      <p>{content}</p>
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
  content: PropTypes.string,
};

RequestCard.defaultProps = {
  content: 'Card content goes here',
};

export default RequestCard;
