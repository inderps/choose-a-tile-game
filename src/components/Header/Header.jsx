import React, { PropTypes } from 'react';
import './Header.css';

function Header(props) {
  return (<header className="header">
    <h1 className="header__round">
      Round: {props.gameSession.get('currentRoundIndex') + 1}
      /{props.gameSession.get('rounds').size}
    </h1>
    <span className="header__status">
      Status: {props.gameSession.get('status')}
    </span>
  </header>);
}

Header.propTypes = {
  gameSession: PropTypes.object,
};

export default Header;
