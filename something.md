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
      center: { lat: 52.3702, lng: 4.8952 },
      zoom: 15,
      error: null,
      isLoaded: false,
      offices: [],
    }
  }

  componentDidMount() {
    fetch("https://www.deskbookers.com/nl-nl/explore/ajax.json?q=amsterdam")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            offices: result.rows
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

renderMarker(offices, index) {
  if(!!this.state.offices) return null
  return (
    <Marker
      key={ this.state.offices.id }
      title={ this.state.offices.location_name }
      name={ this.state.offices.name }
      position={{lat: this.state.offices.coordinate[0], lng: this.state.offices.coordinate[1]}}
    />
  )
}

  render() {

    return (
      <div style={ googleMapStyle }>
        <Map
            google={ this.state.google }
            initialCenter={ this.state.center }
            zoom={this.state.zoom}
            onClick={ this.onMapClicked }
            >
            { this.state.offices.map(offices => this.renderMarker(offices)) }
            <Marker
              title={'Darrrling'}
              name={'MyHome'}
              position={{lat: 52.3421885, lng: 4.9095058}} />
        </Map>
      </div>
    )
  }
}

// { this.props.offices.map(office => this.renderMarker(office)) }

export { GoogleMap }
export default GoogleApiWrapper(
  { apiKey: 'AIzaSyByixSekM2R5J1v3lvbGi3qVOmr5pUK_XI' })(GoogleMap)
