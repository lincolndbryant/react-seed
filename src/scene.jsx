import React from 'react'
import Seed from './seed'
import _ from 'underscore'
import {Motion, spring} from 'react-motion';

export default React.createClass({

  renderSeeds() {
    let seeds = [];
    let key = 0;

    _.range(0, 10).forEach((x) => {
      _.range(0, 10).forEach((y) => {
        seeds.push(<Motion key={key} defaultStyle={{x: 0}} style={{x: spring(100, [100, 5])}}>
          {value => <Seed {...{ x, y, key, value}} />}
        </Motion>);
        key++;
      })
    });
    return seeds;
  },

  render() {
    return (
      <svg version="1.1"
           baseProfile="full"
           width="100%" height="100%"
           xmlns="http://www.w3.org/2000/svg">
        {this.renderSeeds()}
      </svg>
    )
  }
})