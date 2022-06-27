import React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  const div= document.createElement('div'); 
  expect(div.innerHTML).toContain('')
  ReactDOM.unmountComponentAtNode(div);
});
