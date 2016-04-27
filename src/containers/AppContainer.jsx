import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from './../actions/GameActions';
import Header from './../components/Header/Header';
import GridPanel from './../components/GridPanel/GridPanel';
import './AppContainer.css';

export default function AppContainer(props) {
  const currentRound = props.gameSession.get('rounds')
                                        .get(props.gameSession.get('currentRoundIndex'));
  return (
    <div className="app-container">
      <Header gameSession={props.gameSession} />
      <GridPanel currentRound={currentRound} chooseTile={props.actions.chooseTile} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    gameSession: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch),
  };
}

AppContainer.propTypes = {
  gameSession: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
