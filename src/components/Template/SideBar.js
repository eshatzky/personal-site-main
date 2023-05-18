import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/eric.jpg`} alt="" />
      </Link>
      <header>
        <h2>Eric Shatzky</h2>
        <p><a href="mailto:eshatzky@gmail.com">eshatzky@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Eric and I&apos;m a data science enthusiast.
        I am also a teacher, children&apos;s book author and a guccilicious dad.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Eric Shatzky <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
