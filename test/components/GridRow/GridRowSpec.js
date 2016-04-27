import { renderComponent, expect, $ } from './../../testHelper';
import GridRow from './../../../src/components/GridRow/GridRow';
import { Map, List } from 'immutable';

describe('GridRow', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(GridRow, {
      row: new Map({
        tiles: new List(['url-1', 'url-2']),
      })
    });
  });

  it('shows an input to add a new friend', () => {
    const gridTiles = component.find('.grid-tile');
    expect($(gridTiles[0]).css('width')).to.eql('50%');
    expect($(gridTiles[1]).css('width')).to.eql('50%');
  });
});
