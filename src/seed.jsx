import React from 'react';
import tinycolor from 'tinycolor2'
import classNames from 'classnames'
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
    this.opacity = 0.3;
  }

  getColor() {
    let color = tinycolor(this.state.highlight ? 'red' : '#006699')
      .setAlpha(this.opacity);
    if (this.state.highlightCounter) {
      color = color.spin(5 * this.state.highlightCounter)
    }
    //console.log('color', color.toRgb())
    return color;
  }

  render() {
    let r = this.props.r;
    let x = r * this.props.x;
    let y = r * this.props.y;
    let transform = `translateX(${x}px) translateY(${y}px) scale(${r/100})`;
    let color = this.getColor();
    const style = {
      width: 100, transform
    };
    style.WebkitTransform = style.transform;

    return (<g className={classNames({highlight: this.state.highlight})} onClick={(e) => this.props.onClick(this, e)} style={style}>
      <circle className="seed" r="100" cx={ 0 } cy={ 0 } fill={ color.toRgbString() } clipPath="url(#clip)" />
      <circle className={classNames({child: true, move: this.state.highlight})} cx={ 0 } cy="25" r="25" fill={color.toRgbString()} />
      { quarterCircle(this.state.highlight) }
      <defs>
        <clipPath id="clip">
          <circle r="100" cx={ 0 } cy={ 0 } />
        </clipPath>
      </defs>
    </g>)
  }
}
