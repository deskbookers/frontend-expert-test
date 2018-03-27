import React, { Component } from 'react'
import OfficeContainer from '../containers/OfficeContainer'

class AjaxCall extends React.Component {
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

  renderOffices(offices, id) {
    return this.state.offices.map((office, index) => {
      return(
        <tr key={office.id}>
          <td>{ office.name}</td>
          <td>{ office.location_name}</td>
          <td>{ office.address}</td>
          <td> &euro;{ office.hour_price} /uur</td>
          <td> &euro;{ office.day_price} /uur</td>
        </tr>
      )
    })
  }

  render() {

    const { error, isLoaded, bounds } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <div>

          </div>
            <div>
              <h2 style={{ textAlign : 'center '}}>Search resulst</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Naam</th>
                            <th scope="col">Locatie Naam</th>
                              <th scope="col">Adres</th>
                                <th scope="col">p.p.u.</th>
                                  <th scope="col">p.p.d.</th>
                    </tr>
                  </thead>
                    <tbody>
                      {this.renderOffices()}
                    </tbody>
              </table>
            </div>
          </div>
      )
    }
  }
}
export default AjaxCall
