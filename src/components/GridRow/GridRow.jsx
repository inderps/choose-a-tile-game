import React, { PropTypes } from 'react';
import GridTile from './../GridTile/GridTile';
import './GridRow.css';

function calculateWidth(tilesCount) {
  return 100 / tilesCount;
}

function GripRow(props) {
  const width = calculateWidth(props.row.get('tiles').size);
  return (
    <div className="grid-row">
      {
        props.row.get('tiles').map((tile, index) =>
          (<GridTile url={tile.get('url')} key={index} width={width} />)
        )
      }
    </div>
  );
}

GripRow.propTypes = {
  row: PropTypes.object,
  actions: PropTypes.object,
};

export default GripRow;
