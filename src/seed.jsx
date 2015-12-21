import React from 'react';
import tinycolor from 'tinycolor2'
import './seed.styl'

export default class Seed extends React.Component {

  componentWillMount() {
    this.opacity = Math.random() * 0.2
  }

  render() {
    let r = this.props.r;
    let x = r * this.props.x + this.props.value.x;
    let y = r * this.props.y;
    let transform = `translate(${x}, ${y})`;

    let style = {
      animation: `hideshow 5s infinite alternate`
    };
    let childStyle = {
      animation: 'move 2s linear infinite alternate'
    };
    let color = tinycolor('red')
      .setAlpha(this.opacity)
      .brighten(Math.random() * 20);

    return (<g {... {transform} }>
      <circle className="seed" {... {r}} cx={ 0 } cy={ 0 } fill={ color.toRgbString() } clipPath="url(#cut-off-bottom)" style={ style } />
      <circle className="child" cx={ 0 } cy={r/4} r={r/4} fill={color.toRgbString()} style={childStyle} />
      <circle className="child" cx={ 0 } cy={r/4 * 3} r={r/4} fill={color.toRgbString()} style={childStyle} />
      { /* <circle r="10" x={ r } cy={ r } fill={ color.toRgbString() } /> */ }
      <defs>

      </defs>
    </g>)
  }
}
