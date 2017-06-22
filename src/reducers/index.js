import { combineReducers } from 'redux'
import searchResults from './searchResults'
import watchingList from './wachingList'

const githubApi = combineReducers({
  searchResults,
  watchingList,
})

export default githubApi
