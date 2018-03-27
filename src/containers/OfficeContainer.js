import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import OfficeItem from './OfficeItem'
import { officeShape } from './OfficeItem'
//material-ui & styling
// import Button from 'material-ui/Button'
// import Typography from 'material-ui/Typography'
import './OfficeItem.css'

class officesContainer extends PureComponent {
  static propTypes = {
    offices: PropTypes.arrayOf(officeShape).isRequired,
  }

  renderoffice(office, id) {
    return <OfficeItem key={id} { ...office } />
  }

  render() {
    if (!this.props.offices) return null
    const { offices } = this.props

    return (
      <div className="office-container">
        <div className="top-box">

            <strong>{offices.length}</strong> results founds

        </div>
        <div className="offices-wrap">
          { this.props.offices.map(this.renderoffice) }
        </div>
      </div>
    )
  }
}



export default officesContainer
