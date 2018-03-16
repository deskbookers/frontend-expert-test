import React, {Component} from 'react'

class PageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      rows: []
    }
  }

  componentDidMount() {
    fetch("https://www.deskbookers.com/nl-nl/explore/ajax.json?q=")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rows: result.rows
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

  render() {
    const { error, isLoaded, rows } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {rows.map(row => (
            <li key={row.name}>
              {row.name} {row.location_name} {row.location_city}
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default PageContainer
