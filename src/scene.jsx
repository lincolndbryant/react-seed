import React from 'react'
import Seed from './seed'
import range from 'lodash.range'
import {Motion, spring} from 'react-motion';

export default class Scene extends React.Component {

  constructor() {
    super();
    this.state = {
      r: 50
    }
  }

  renderSeeds() {
    let seeds = [];
    let key = 0;

    range(0, 10).forEach((x) => {
      range(0, 10).forEach((y) => {
        seeds.push(<Motion key={key} defaultStyle={{x: 0}} style={{x: spring(100, [100, 5])}}>
          {value => <Seed {...{ x, y, key, value}} r={this.state.r} />}
        </Motion>);
        key++;
      })
    });
    return seeds;
  }

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
}