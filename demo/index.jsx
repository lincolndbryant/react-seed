import React from 'react';
import ReactDOM from 'react-dom';
import { Scene } from 'react-seed';
import './demo.styl';

const scene = ReactDOM.render(<Scene />, document.querySelector('#app'));
let r = 50;

setInterval(() => {
  //scene.setState({r: r++})
}, 1000)