import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'yoda-design-system';
import styles from './RequestCard.module.css';

const RequestCard = ({ text, className, acceptAction, denyAction }) => {
  return (
    <Card className={`${styles.cardContainer} ${className}`}>
      <div className={`${styles.textContentContainer}`}>
        <span>{text}</span>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          variant="outlined"
          className={`${styles.acceptButton} ${styles.button}`}
          onClick={acceptAction}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          className={styles.button}
          onClick={denyAction}
        >
          Deny
        </Button>
      </div>
    </Card>
  );
};

RequestCard.propTypes = {
  text: PropTypes.string.isRequired,
  acceptAction: PropTypes.func.isRequired,
  denyAction: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RequestCard.defaultProps = {
  className: '',
};

export default RequestCard;
