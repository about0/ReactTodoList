import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Just a basic test suite example', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App/>, div);
  });

  it('could fail value', () => {
    expect(1).toBe(1);
  })
});
