import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults, saveSearch } from '../actions'
import TextField from 'material-ui/TextField';
import { checkStatus, parseJSON, sharedApi } from '../lib/api'
import _ from 'lodash'
const KEY_ENTER = 13

function mapStateToProps(state) {
  return {
    user_name: state.searchWords.user_name,
    word: state.searchWords.word,
  };
}

let InputForm = ({ dispatch, user_name, word }) => {

  const debounceSearch = _.debounce((word , user_name) => {
    dispatch(saveSearch(word, user_name))
    if (word !== "" || user_name !== "") {
      sharedApi.getRepositoriesSearch(word, user_name)
        .then(checkStatus)
        .then(parseJSON)
        .then(result => {
          dispatch(getSearchResults(result.items))
        })
        .catch(() => {
          alert('エラーが発生しました．時間をおいてもう一度お試しください．')
          dispatch(getSearchResults([]))
        });
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
          debounceSearch(e.target.value, user_name)
        }}
      />
      <TextField
        placeholder="Input user name"
        onChange={e => {
          debounceSearch(word, e.target.value)
        }}
      />
    </div>
  )
}
InputForm = connect(mapStateToProps)(InputForm)

export default InputForm
