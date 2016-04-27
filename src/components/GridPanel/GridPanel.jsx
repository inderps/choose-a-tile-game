import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../../actions/GameActions';
import './GridPanel.css';

export default function GridPanel() {
  return (
    <div className="gridpanel">
    </div>
  );
}

function mapStateToProps(state) {
  return {
    gameSession: state.gameSession,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch),
  };
}

GridPanel.propTypes = {
  gameSession: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPanel);
