import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from './../../actions/GameActions';
import GridRow from './../GridRow/GridRow';
import './GridPanel.css';

export default function GridPanel(props) {
  const currentRound = props.gameSession.get('rounds')
                                        .get(props.gameSession.get('currentRoundIndex'));
  return (
    <div className="grid-panel">
      {
        currentRound.get('rows').map((row, index) =>
          (<GridRow row={row} key={index} rowIndex={index} chooseTile={props.actions.chooseTile} />)
        )
      }
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

GridPanel.propTypes = {
  gameSession: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPanel);
