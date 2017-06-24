import _ from 'lodash'

const watchingList = (state = {watching_repositories:[]}, action) => {
  switch (action.type) {
    case 'GET_WATCHING_LIST':
      return {
        watching_repositories: action.results
      };
    case 'ADD_WATCH_REPOSITORY':
      return {
        watching_repositories: [
          ...action.repositories,
          action.repo
        ]
      };
    case 'TOGGLE_UNWATCH_REPOSITORY':
      return {
        watching_repositories: _.filter(action.repositories, function(repo) { return repo.id !== action.id})
      }
    default:
      return state
  }
}


export default watchingList
