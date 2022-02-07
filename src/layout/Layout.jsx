import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import styles from './Layout.module.scss';
import classnames from 'classnames';
import Logo from '../assets/png/logo_02.png';

// const setActive = (isActive) => (isActive ? 'nav-link-active' : 'nav-link-active');
const setActive = ({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link');

const Layout = () => {
  return (
    <>
      <header>
        <div style={{ color: 'white' }}>
          <Link to="/football-react-hooks" className={styles.logo__block}>
            <img className={styles.logo__photo} src={Logo} />
          </Link>
        </div>

        <nav className="navbar">
          <ul className={classnames(styles.list)}>
            <li className={styles.list__li}>
              <NavLink to={`/football-react-hooks`} className={setActive}>
                <h1>Home</h1>
              </NavLink>
            </li>
            <li className={styles.list__li}>
              <NavLink to={`/football-react-hooks/league`} className={setActive}>
                <h1>Leagues</h1>
              </NavLink>
            </li>
            <li className={styles.list__li}>
              <NavLink to={`/football-react-hooks/commands`} className={setActive}>
                <h1>Commands</h1>
              </NavLink>
            </li>
            <li className={styles.list__li}>
              <NavLink
                to={`/football-react-hooks/football-react-hooks/calendarligue`}
                className={setActive}>
                <h1>Leagues Date</h1>
              </NavLink>
            </li>
            <li className={styles.list__li}>
              <NavLink to={`/football-react-hooks/calendarcommand`} className={setActive}>
                <h1>Command Matches</h1>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer>
        <h2 style={{ color: 'white' }}>
          © 2002–2022. Copyright © Currency Co. <span className="telegram"></span>:
          @enternaloptimist
        </h2>
      </footer>
    </>
  );
};

export { Layout };
