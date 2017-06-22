import React from 'react'
import { connect } from 'react-redux'
import { getWatchingList } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON } from '../lib/api'
const KEY_ENTER = 13

let InputAccessToken = ({ dispatch }) => {

  return (
    <div>
     <TextField
      placeholder="Input Access Token"
       onKeyDown={e => {
         if (e.keyCode === KEY_ENTER) {
           fetch('https://api.github.com/user/subscriptions?access_token='+e.target.value)
             .then(checkStatus)
             .then(parseJSON)
             .then(result => {
               console.log(result)
               dispatch(getWatchingList(result))
             })

           e.target.value = ""
         }
       }}
     />
    </div>
  )
}
InputAccessToken = connect()(InputAccessToken)

export default InputAccessToken
