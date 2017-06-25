import { combineReducers } from 'redux'
import searchResults from './searchResults'
import watchingList from './wachingList'
import saveAccessToken from './saveAccessToken'
import searchWords from './searchWords'

const githubApi = combineReducers({
  searchResults,
  watchingList,
  saveAccessToken,
  searchWords,
})

export default githubApi
