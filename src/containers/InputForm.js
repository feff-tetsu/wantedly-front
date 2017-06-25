import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults, saveSearchUserName } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON, sharedApi } from '../lib/api'
import _ from 'lodash'
const KEY_ENTER = 13

function mapStateToProps(state) {
  return {
    user_name: state.searchWords.user_name
  };
}

let InputForm = ({ dispatch, user_name }) => {

  const delayedNameSearch = _.debounce((words , user_name) => {
    if (words !== "") {
      sharedApi.getRepositoriesSearch(words, user_name)
        .then(checkStatus)
        .then(parseJSON)
        .then(result => {
          dispatch(getSearchResults(result.items))
        })
      }
  }, 400)

  const delayedUserNameSearch = _.debounce((words , user_name) => {
    dispatch(saveSearchUserName(user_name))
    if (words !== "") {
      sharedApi.getRepositoriesSearch(words, user_name)
        .then(checkStatus)
        .then(parseJSON)
        .then(result => {
          dispatch(getSearchResults(result.items))
        })
      }
  }, 400)

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
          delayedNameSearch(e.target.value, user_name)
        }}
      />
      <TextField
        placeholder="Input user name"
        onChange={e => {
            delayedUserNameSearch('react', e.target.value)
        }}
      />
    </div>
  )
}
InputForm = connect(mapStateToProps)(InputForm)

export default InputForm
