import { expect } from './../testHelper';
import { chooseTile } from './../../src/actions/GameActions';
import configureStore from './../../src/store/configureStore';

describe('GameActions', () => {

  let store;

  beforeEach(() => {
    store = configureStore();
  });

  it('should go to next round if choosen tile is correct', () => {
    expect(store.getState().get('currentRoundIndex')).to.eql(0);

    store.dispatch(chooseTile(0, 1));

    expect(store.getState().get('currentRoundIndex')).to.eql(1);
  });

  it('should not go to next round if choosen tile is incorrect', () => {
    expect(store.getState().get('currentRoundIndex')).to.eql(0);

    store.dispatch(chooseTile(0, 0));

    expect(store.getState().get('currentRoundIndex')).to.eql(0);
  });


  it('should set currentRoundIndex as -1 if all rounds are completed', () => {
    expect(store.getState().get('currentRoundIndex')).to.eql(0);

    store.dispatch(chooseTile(0, 1));
    store.dispatch(chooseTile(1, 0));
    store.dispatch(chooseTile(1, 1));

    expect(store.getState().get('currentRoundIndex')).to.eql(-1);
  });
});
