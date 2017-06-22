import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON } from '../lib/api'
const KEY_ENTER = 13

let InputForm = ({ dispatch }) => {

  return (
    <div>
     <TextField
       placeholder="Input search word"
       onKeyDown={e => {
         if (e.keyCode === KEY_ENTER) {
           e.target.value = ""
         }
       }}
       onChange={e => {
         fetch('https://api.github.com/search/repositories?q='+e.target.value+'+language:assembly&sort=stars&order=desc')
           .then(checkStatus)
           .then(parseJSON)
           .then(result => {
             dispatch(getSearchResults(result.items))
           })
       }}
     />
    </div>
  )
}
InputForm = connect()(InputForm)

export default InputForm
