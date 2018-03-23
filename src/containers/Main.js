import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'

const navStyle = {
  width: '100%',
  height: '4rem',
  backgroundColor: 'white'
}

const sideBarStyle = {
  width: '20%',
  height: '100%',
  backgroundColor: 'grey',
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  overflowX: 'hidden',
  paddingTop: '1rem',
  marginTop: '4rem',
}

const mapStyle = {
  width: '100%',
  backgroundColor: 'lightBlue'
}

class Main extends PureComponent {

  render() {
    return(
      <div>
        <div style={ navStyle }>
        </div>
        <div>

            <div style={ sideBarStyle }>
            </div>

            <div style={ mapStyle }>
            </div>

        </div>
      </div>
    )
  }
}

export default Main
