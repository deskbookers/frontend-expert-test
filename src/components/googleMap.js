import React, { PureComponent } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const googleMapStyle = {
  width: '59.5%',
  height: '98%',
  position: 'fixed',
  backgroundColor: '393A73'
}

class GoogleMap extends PureComponent {
  constructor() {
    super()
    this.state = {
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

  renderMarker(offices) {
    console.log('halloooooo1', this.state.offices)
    console.log('check id', this.state.offices)
    return this.state.offices.map((offices, index) => {
      return(
        <Marker
          key={ offices.id }
          title={ offices.location_name }
          name={ offices.name }
          icon={ 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
          position={{ lat: offices.coordinate[0], lng: offices.coordinate[1] }}
          />
      )
    })
  }

  render() {
    return (
      <div style={ googleMapStyle }>
        <Map
            google={ this.props.google }
            initialCenter={{ lat: 52.3702, lng: 4.8952 }}
            zoom={13}
            onClick={ this.onMapClicked }
            >
            { this.renderMarker() }
        </Map>
      </div>
    )
  }
}


export { GoogleMap }
export default GoogleApiWrapper(
  { apiKey: 'AIzaSyByixSekM2R5J1v3lvbGi3qVOmr5pUK_XI' })(GoogleMap)
