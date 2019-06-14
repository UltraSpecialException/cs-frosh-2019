import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import particleNetwork from './particle.js'
import "../css/particles.css"

class ParticleNetwork extends Component {
  componentDidMount () {
    const container = findDOMNode(this)
    const options = {
      density: 10000,
      velocity: 0.5,
    }

    new particleNetwork(container, options) // eslint-disable-line
  }

  render () {
    const { classes, id } = this.props;

    return (
      <div className={classes} />
    )
  }
}

export default ParticleNetwork