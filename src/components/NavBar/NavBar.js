import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card } from 'yoda-design-system';

import { LANDING } from '../../utils/routes';

import styles from './NavBar.module.css';

const NavBar = ({ location }) =>
  location.pathname === LANDING ? <NavBarNonAuth /> : <NavBarAuth />;

NavBar.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};
const NavBarAuth = () => {
  return (
    <Card className={styles.navbar}>
      <span className={styles.title}>Solid Web</span>
      <nav>
        <ul className={styles.tabs}>
          <li>Overview</li>
          <li>Contacts</li>
          <li>Apps</li>
          <li>Data</li>
        </ul>
      </nav>
      <div>Avatar</div>
    </Card>
  );
};

const NavBarNonAuth = () => {
  return (
    <Card className={styles.navbar}>
      <span className={styles.title}>Solid Web</span>
      <nav>
        <ul className={styles.authentication}>
          <li>
            <Link className={styles.link}>Login</Link>
          </li>
          <li>
            <Link className={styles.link}>Register</Link>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default NavBar;
