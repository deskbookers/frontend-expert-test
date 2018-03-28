// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Main,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Main } />
      </div>
    )
  }
}
