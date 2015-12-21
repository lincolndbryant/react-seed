import React from 'react';
import tinycolor from 'tinycolor2'
import './seed.styl'

export default React.createClass({

  componentWillMount() {
    this.opacity = Math.random();
  },

  render() {
    let r = 100;
    let x = r * this.props.x + this.props.value.x;
    let y = r * this.props.y;
    let transform = `translate(${x}, ${y})`;
    let style = {
      animation: `spin 100s linear infinite`,
      animationDirection: 'alternate'
    };
    let color = tinycolor('red')
      .setAlpha(this.opacity)
      .brighten(Math.random() * 100);

    return (<g {... {transform} }>
      <circle className="seed" {... {r}} cx={ 0 } cy={ 0 } fill={ color.toRgbString() } clipPath="url(#cut-off-bottom)" style={ style } />
      <circle r="10" x={ r } cy={ r } fill={ color.toRgbString() } />
      <defs>

      </defs>
    </g>)
  }
});
