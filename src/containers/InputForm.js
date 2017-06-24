import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON, sharedApi } from '../lib/api'
import _ from 'lodash'
const KEY_ENTER = 13

let InputForm = ({ dispatch }) => {

  const delayedSearch = _.debounce((words) => {
    if (words !== "") {
      sharedApi.getRepositoriesSearch(words)
        .then(checkStatus)
        .then(parseJSON)
        .then(result => {
          dispatch(getSearchResults(result.items))
        })
      }
  }, 500)

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
         delayedSearch(e.target.value)
       }}
     />
    </div>
  )
}
InputForm = connect()(InputForm)

export default InputForm
