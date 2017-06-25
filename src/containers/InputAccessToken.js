import React from 'react'
import { connect } from 'react-redux'
import { getWatchingList, saveAccessToken } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON, sharedApi } from '../lib/api'

const KEY_ENTER = 13

let InputAccessToken = ({ dispatch, access_token }) => {
  return (
    <div>
      <TextField
        placeholder="Input your personal access token"
        onKeyDown={e => {
          if (e.keyCode === KEY_ENTER) {
            dispatch(saveAccessToken(e.target.value))
            sharedApi.reloadWatchingList(e.target.value)
              .then(checkStatus)
              .then(parseJSON)
              .then(result => {
                dispatch(getWatchingList(result))
              })
              .catch(() => {
                alert('エラーが発生しました．アクセストークンが間違っている可能性があります．')
                dispatch(getWatchingList([]))
              });
           e.target.value = ""
          }
        }}
      />
    </div>
  )
}
InputAccessToken = connect()(InputAccessToken)

export default InputAccessToken
