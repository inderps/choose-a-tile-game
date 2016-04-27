import { fromJS } from 'immutable';
import { CHOOSE_TILE } from './../constants/action-constants';

const initialState = {
  currentRoundIndex: 0,
  rounds: [{
    rows: [{
      tiles: [{
        url: 'tiles/111.jpg',
      }, {
        url: 'tiles/112.jpg',
        isCorrect: true,
      }],
    }, {
      tiles: [{
        url: 'tiles/121.jpg',
      }, {
        url: 'tiles/122.jpg',
      }],
    }],
  }, {
    rows: [{
      tiles: [{
        url: 'tiles/211.jpg',
      }, {
        url: 'tiles/212.jpg',
      }],
    }, {
      tiles: [{
        url: 'tiles/221.jpg',
        isCorrect: true,
      }],
    }, {
      tiles: [{
        url: 'tiles/231.jpg',
      }, {
        url: 'tiles/232.jpg',
      }, {
        url: 'tiles/233.jpg',
      }],
    }],
  }, {
    rows: [{
      tiles: [{
        url: 'tiles/311.jpg',
      }],
    }, {
      tiles: [{
        url: 'tiles/321.jpg',
      }, {
        url: 'tiles/322.jpg',
        isCorrect: true,
      }, {
        url: 'tiles/323.jpg',
      }, {
        url: 'tiles/324.jpg',
      }],
    }],
  }],
};

function chooseTile(state, rowIndex, tileIndex) {
  const currentRoundIndex = state.get('currentRoundIndex');
  const currentRound = state.get('rounds').get(currentRoundIndex);
  if (currentRound.get('rows').get(rowIndex)
  .get('tiles').get(tileIndex)
  .get('isCorrect')) {
    let newCurrentRoundIndex = currentRoundIndex + 1;
    if (newCurrentRoundIndex === state.get('rounds').size) {
      newCurrentRoundIndex = -1;
    }
    return state.set('currentRoundIndex', newCurrentRoundIndex);
  }
  return state;
}

export default function (state = fromJS(initialState), action) {
  switch (action.type) {
    case CHOOSE_TILE:
      return chooseTile(state, action.rowIndex, action.tileIndex);
    default:
      return state;
  }
}
