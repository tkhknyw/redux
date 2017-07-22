import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Applications</IndexLink>
      {" | "}
      <Link to="/application" activeClassName="active">Application</Link>
    </nav>
  );
};

export default Header;
