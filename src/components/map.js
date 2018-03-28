import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const googleMapStyle = {
  height: '55rem',
  width: '60rem',
}

const AnyReactComponent = ({ text }) => <div>{ text }</div>

export default class FirstMap extends Component {
  static defaultProps = {
    center: { lat: 43.480494, lng: -80.548928 },
    zoom: 15
  }

render() {
    return (
      <div style={ googleMapStyle }>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 43.480494 }
            lng={ -80.548928 }
            text={ 'This is the location!' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
