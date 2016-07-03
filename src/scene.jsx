import React from 'react'
import Seed from './seed'
import range from 'lodash.range'

const COLS = 10,
  ROWS = 10,
  STEP_DELAY = 25;


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
    this.highlightSeed(seed);
  }

  highlightSeed(seed, acc=5) {
    if (acc <= 0) {
      return;
    }
    seed.setState({highlight: true, highlightCounter: acc});
    setTimeout(() => {
      this.fadeHighlight(seed)
    }, STEP_DELAY);

    setTimeout(() => {
      this.getNeighbors(seed).forEach(seed => {
        this.highlightSeed(seed, acc - 1);
        setTimeout(() => {
          this.fadeHighlight(seed)
        }, STEP_DELAY);
      })
    }, STEP_DELAY);
  }

  fadeHighlight(seed) {
    if (seed.state.highlightCounter <= 0) {
      return;
    }
    let counter = seed.state.highlightCounter - 1;
    seed.setState({highlightCounter: counter, highlight: counter > 0});
    setTimeout(() => {
      this.fadeHighlight(seed)
    }, STEP_DELAY);
  }

  getNeighbors(seed) {
    let seeds = []

    let tryNeighbor = (id) => {
      if (this.refs[id]) {
        seeds.push(this.refs[id])
      }
    }

    tryNeighbor(seed.props.id - 1)
    tryNeighbor(seed.props.id + 1)
    tryNeighbor(seed.props.id - COLS)
    tryNeighbor(seed.props.id + COLS)

    console.log(seed, 'has neighbords', seeds);

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