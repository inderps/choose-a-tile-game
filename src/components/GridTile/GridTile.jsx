import React, { PropTypes } from 'react';
import './GridTile.css';

function widthStyle(width) {
  return {
    width: `${width}%`,
  };
}

function GridTile(props) {
  return (<img className="grid-tile"
    src={props.url}
    alt="something is wrong"
    style={widthStyle(props.width)}
    onClick={() => props.chooseTile(props.rowIndex, props.tileIndex)}
  />);
}

GridTile.propTypes = {
  url: PropTypes.string,
  width: PropTypes.number,
  rowIndex: PropTypes.number,
  tileIndex: PropTypes.number,
  chooseTile: PropTypes.func,
};

export default GridTile;
