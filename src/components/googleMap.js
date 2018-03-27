import React, { PureComponent } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const googleMapStyle = {
  width: '59.5%',
  height: '98%',
  position: 'fixed'
}

class GoogleMap extends PureComponent {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      center: { lat: 52.3702, lng: 4.8952 },
      zoom: 13,
      offices: [],
    }
  }

  render() {
    return (
      <div style={ googleMapStyle }>
        <Map
            google={ this.props.google }
            initialCenter={ this.state.center }
            zoom={this.state.zoom}
            onClick={ this.onMapClicked }
            >
            <Marker
              title={'Darrrling'}
              name={'MyHome'}
              position={{lat: 52.3421885, lng: 4.9095058}} />
        </Map>
      </div>
    )
  }
}


export { GoogleMap }
export default GoogleApiWrapper(
  { apiKey: 'AIzaSyByixSekM2R5J1v3lvbGi3qVOmr5pUK_XI' })(GoogleMap)
