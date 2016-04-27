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
          (<GridTile url={tile.get('url')}
            key={index}
            width={width}
            rowIndex={props.rowIndex}
            tileIndex={index}
            chooseTile={props.chooseTile}
          />)
        )
      }
    </div>
  );
}

GripRow.propTypes = {
  row: PropTypes.object,
  rowIndex: PropTypes.number,
  chooseTile: PropTypes.func,
};

export default GripRow;
