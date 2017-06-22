import { combineReducers } from 'redux'
import searchResults from './searchResults'

const githubApi = combineReducers({
  searchResults,
})

export default githubApi
