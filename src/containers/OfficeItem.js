import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './OfficeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/350x180?text=No%20Image'

export const officeShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coordinate: PropTypes.array.isRequired,
  location_name: PropTypes.string.isRequired,
  image_urls: PropTypes.array,
  address: PropTypes.array,
  hour_price: PropTypes.number,
  day_price: PropTypes.number,
})

class officeItem extends PureComponent {
  static propTypes = {
    ...officeShape.isRequired,
  }

  render() {
    const { name, coordinate, location_name, image_urls, adress, hour_price, day_price } = this.props

    return (
      <div className="office-item">
        <div
          className="office-cover"
          style={{ backgroundImage:`url(${ image_urls[0] || PLACEHOLDER })` }} >

          <div id="office-price">
            <div className="hour-rate">{ hour_price && <h2>{hour_price}/hour</h2>}</div>
            <div className="day-rate">
              <h4>{ day_price ? `${day_price} - per person` : 'per person' }</h4></div>
          </div>
        </div>

        <div className="office-content">
          <div className="office-name">
            <h2>{ name }</h2>
          </div>
          <div className="office-name">
            <h2>{ location_name }</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default officeItem
