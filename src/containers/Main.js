import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

//components
import GoogleMap from '../components/googleMap'
import AjaxCall from '../components/ajaxCall'

//styles
import './Main.css'

class Main extends PureComponent {

  render() {
    return(
      <div className="container">
        <div className="nav">
          <AjaxCall />
        </div>

        <div index="123" className="map">
          <GoogleMap />
        </div>
      </div>
    )
  }
}

export default Main
