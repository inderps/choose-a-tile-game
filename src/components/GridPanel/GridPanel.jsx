import React, { PropTypes } from 'react';
import GridRow from './../GridRow/GridRow';
import './GridPanel.css';

export default function GridPanel(props) {
  return (
    <div className="grid-panel">
      {
        props.currentRound.get('rows').map((row, index) =>
          (<GridRow row={row} key={index} rowIndex={index} chooseTile={props.chooseTile} />)
        )
      }
    </div>
  );
}

GridPanel.propTypes = {
  currentRound: PropTypes.object,
  chooseTile: PropTypes.func,
};

export default GridPanel;
