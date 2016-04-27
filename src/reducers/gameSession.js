import { fromJS } from 'immutable';

const initialState = {
  currentRound: 0,
  rounds: [{
    rows: [{
      tiles: [{
        url: '/tiles/111.jpg',
      }, {
        url: '/tiles/112.jpg',
        isCorrect: true,
      }],
    }, {
      tiles: [{
        url: '/tiles/121.jpg',
      }, {
        url: '/tiles/122.jpg',
      }],
    }],
  }, {
    rows: [{
      tiles: [{
        url: '/tiles/211.jpg',
      }, {
        url: '/tiles/212.jpg',
        isCorrect: true,
      }],
    }, {
      tiles: [{
        url: '/tiles/221.jpg',
      }],
    }, {
      tiles: [{
        url: '/tiles/221.jpg',
      }, {
        url: '/tiles/222.jpg',
      }, {
        url: '/tiles/223.jpg',
      }],
    }],
  }, {
    rows: [{
      tiles: [{
        url: '/tiles/311.jpg',
      }],
    }, {
      tiles: [{
        url: '/tiles/321.jpg',
      }, {
        url: '/tiles/322.jpg',
        isCorrect: true,
      }, {
        url: '/tiles/323.jpg',
      }],
    }],
  }],
};

export default function (state = fromJS(initialState)) {
  return state;
}
