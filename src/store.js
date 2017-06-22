import { createStore } from 'redux'
import githubApi from './reducers/index'

let store = createStore(githubApi)

export default store
