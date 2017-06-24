import { combineReducers } from 'redux'
import searchResults from './searchResults'
import watchingList from './wachingList'
import saveAccessToken from './saveAccessToken'

const githubApi = combineReducers({
  searchResults,
  watchingList,
  saveAccessToken
})

export default githubApi
