import React from 'react';
import tinycolor from 'tinycolor2'
import './seed.styl'
import {quarterCircle} from './paths/quarter-circle'

export default class Seed extends React.Component {

  constructor() {
    super()
    this.state = {
      highlight: false
    }
  }

  componentWillMount() {
    this.opacity = Math.random() * 0.3
  }

  render() {
    let r = this.props.r;
    let x = r * this.props.x;
    let y = r * this.props.y;
    let transform = `translate(${x}, ${y}) scale(${r/100})`;

    let color = tinycolor(this.state.highlight ? 'red' : '#006699')
      .setAlpha(this.opacity)
      //.brighten(Math.random() * 20);

    return (<g className="grow" {... {transform}} onClick={(e) => this.props.onClick(this, e)} style={{width: '100px'}}>
      <circle className="seed" r="100" cx={ 0 } cy={ 0 } fill={ color.toRgbString() } clipPath="url(#clip)" />
      <circle className="child move " cx={ 0 } cy="25" r="25" fill={color.toRgbString()} />
      { quarterCircle(this.state.highlight) }
      <defs>
        <clipPath id="clip">
          <circle r="100" cx={ 0 } cy={ 0 } />
        </clipPath>
      </defs>
    </g>)
  }
}
