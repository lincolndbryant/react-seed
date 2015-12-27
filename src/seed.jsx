import React from 'react';
import tinycolor from 'tinycolor2'
import './seed.styl'

export default class Seed extends React.Component {

  componentWillMount() {
    this.opacity = Math.random() * 0.3
  }

  render() {
    let r = this.props.r;
    let x = r * this.props.x;
    let y = r * this.props.y;
    let transform = `translate(${x}, ${y}) scale(${r/100})`;

    let color = tinycolor('#006699')
      .setAlpha(this.opacity)
      .brighten(Math.random() * 20);

    return (<g {... {transform} }>
      <circle className="seed" r="100" cx={ 0 } cy={ 0 } fill={ color.toRgbString() } clipPath="url(#clip)" />
      <circle className="child " cx={ 0 } cy="25" r="25" fill={color.toRgbString()} />
      <path d="M50 14
           L 50 86
           A 100 100, 0, 0, 0, 86, 50
           A 100 100, 0, 0, 0, 50, 14
           Z" fill="rgba(1, 0, 0, 0.9)"/>
      { /* <circle className="child" cx={ 0 } cy={r/4 * 3} r={r/4} fill={color.toRgbString()} /> */ }
      { /* <circle r="10" x={ r } cy={ r } fill={ color.toRgbString() } /> */ }
      <defs>
        <clipPath id="clip">
          <circle r="100" cx={ 0 } cy={ 0 } />
        </clipPath>
      </defs>
    </g>)
  }
}
