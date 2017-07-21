import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Applications</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">Testing Results</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Releases</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Deploy</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Monitor</Link>
    </nav>
  );
};

export default Header;
