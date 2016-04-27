import React, { PropTypes } from 'react';
import './Header.css';

function Header(props) {
  return (<header className="header">
    <h1>Round: {props.gameSession.get('currentRoundIndex') + 1}
      /{props.gameSession.get('rounds').size}</h1>
  </header>);
}

Header.propTypes = {
  gameSession: PropTypes.object,
};

export default Header;
