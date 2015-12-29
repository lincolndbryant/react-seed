import React from 'react';
import ReactDOM from 'react-dom';
import { Scene } from 'react-seed';
import './demo.styl';

const scene = ReactDOM.render(<Scene />, document.querySelector('#app'));
let r = 100;

setInterval(() => {
  //scene.setState({r: r += 0.1})
}, 50)

window.setRadius = function(r) {
  scene.setState({r: r});
};