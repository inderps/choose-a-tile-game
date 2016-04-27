import React from 'react';
import jq from 'jquery';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from './../src/store/configureStore';

// Global prerequisites to make it work in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jq(window);

function renderComponent(ComponentClass, props = {}) {
  const store = configureStore();
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

export { renderComponent, expect, $ };
