import React from 'react'
import Seed from './seed'
import range from 'lodash.range'

const COLS = 10,
    ROWS = 10;


export default class Scene extends React.Component {

  constructor() {
    super();
    this.state = {
      r: 100
    }
  }

  renderSeeds() {
    let seeds = [];
    let key = 0;

    range(0, COLS).forEach((y) => {
      range(0, ROWS).forEach((x) => {
        let seed = this.refs[key];
        let props = {x, y, key};
        props.r = this.state.r;

        seeds.push( <Seed {...props} id={key} onClick={this.onSeedClicked.bind(this)} ref={key} /> );
        key++;
      })
    });
    return seeds;
  }

  componentDidMount() {
    document.addEventListener('keypress', (evt) => {
      if (evt.keyCode == 32) {
        this.setState({paused: !this.state.paused})
      }
    })
  }

  onSeedClicked(seed, e) {
    seed.setState({highlight: true, highlightCounter: 3});
    setTimeout(() => {
      this.fadeHighlight(seed)
    }, 1000);
    this.getNeighbors(seed).forEach(seed => {
      seed.setState({highlight: true, highlightCounter: 3});
      setTimeout(() => {
        this.fadeHighlight(seed)
      }, 1000);
    })
  }

  fadeHighlight(seed) {
    let counter = seed.state.highlightCounter-1
    seed.setState({highlightCounter: counter, highlight: counter > 0});
    if (counter > 0) {
      setTimeout(() => {
        this.fadeHighlight(seed)
      }, 1000);
    }
  }

  getNeighbors(seed) {
    let seeds = [this.refs[seed.props.id-1], this.refs[seed.props.id+1]]
    return seeds;
  }

  render() {
    document.body.classList.toggle('paused', this.state.paused);
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