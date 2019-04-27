import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'yoda-design-system';

import { LANDING, REQUESTS, CONTACTS, APPS, DATA } from '../../utils/routes';
import { locationShape, historyShape } from '../../utils/router-prop-types';

import styles from './NavBar.module.css';

const NavBar = ({ location: { pathname }, history }) =>
  pathname === LANDING ? (
    <NavBarNonAuth history={history} />
  ) : (
    <NavBarAuth history={history} />
  );

NavBar.propTypes = {
  location: locationShape.isRequired,
  history: historyShape.isRequired,
};

const NavBarAuth = () => {
  return (
    <Card className={styles.navbar}>
      <span className={styles.title}>
        <Link to={REQUESTS}>Solid Web</Link>
      </span>
      <nav>
        <ul className={styles.tabs}>
          <li>
            <Link className={styles.link} to={REQUESTS}>
              Overview
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={CONTACTS}>
              Contacts
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={APPS}>
              Apps
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={DATA}>
              Data
            </Link>
          </li>
        </ul>
      </nav>
      <div>Avatar</div>
    </Card>
  );
};

const NavBarNonAuth = ({ history }) => {
  const handleClick = event => {
    history.push(REQUESTS);
  };
  return (
    <Card className={styles.navbar}>
      <span className={styles.title}>Solid Web</span>
      <nav>
        <ul className={styles.authentication}>
          <li>
            <button type="button" className={styles.link} onClick={handleClick}>
              Login
            </button>
          </li>
          <li>
            <button type="button" className={styles.link} onClick={handleClick}>
              Register
            </button>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

NavBarNonAuth.propTypes = {
  history: historyShape.isRequired,
};

export default NavBar;
