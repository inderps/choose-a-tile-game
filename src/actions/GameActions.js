import { CHOOSE_TILE } from './../constants/action-constants';

export function chooseTile(rowIndex, tileIndex) {
  return {
    type: CHOOSE_TILE,
    rowIndex,
    tileIndex,
  };
}
