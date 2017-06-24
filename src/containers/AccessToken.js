import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    access_token: state.saveAccessToken.access_token,
  };
}

let AccessToken = (AccessToken) => (
    <div>
      Access Token = {AccessToken.access_token}
    </div>
  )

AccessToken = connect(mapStateToProps)(AccessToken)

export default AccessToken
