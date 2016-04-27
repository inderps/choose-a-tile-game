import { fromJS } from 'immutable';
import { CHOOSE_TILE } from './../constants/action-constants';

const initialState = {
  currentRoundIndex: 0,
  rounds: [{
    rows: [{
      tiles: ['tiles/111.jpg', 'tiles/112.jpg'],
    }, {
      tiles: ['tiles/121.jpg', 'tiles/122.jpg'],
    }],
    correctAnswer: {
      rowIndex: 0,
      tileIndex: 1,
    },
  }, {
    rows: [{
      tiles: ['tiles/211.jpg', 'tiles/212.jpg'],
    }, {
      tiles: ['tiles/221.jpg'],
    }, {
      tiles: ['tiles/231.jpg', 'tiles/232.jpg', 'tiles/233.jpg'],
    }],
    correctAnswer: {
      rowIndex: 1,
      tileIndex: 0,
    },
  }, {
    rows: [{
      tiles: ['tiles/311.jpg'],
    }, {
      tiles: ['tiles/321.jpg', 'tiles/322.jpg', 'tiles/323.jpg', 'tiles/324.jpg'],
    }],
    correctAnswer: {
      rowIndex: 1,
      tileIndex: 2,
    },
  }],
};

function chooseTile(state, rowIndex, tileIndex) {
  const currentRoundIndex = state.get('currentRoundIndex');
  const rounds = state.get('rounds');
  if (currentRoundIndex === rounds.size - 1) {
    return state;
  }
  const correctAnswer = rounds.get(currentRoundIndex).get('correctAnswer');
  if (correctAnswer.get('rowIndex') === rowIndex &&
      correctAnswer.get('tileIndex') === tileIndex) {
    return state.set('currentRoundIndex', currentRoundIndex + 1);
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
