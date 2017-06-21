import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import searchResults from './searchResults'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  searchResults
})

export default todoApp
