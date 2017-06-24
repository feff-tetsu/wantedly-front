const watchingList = (state = {watching_repositories:[]}, action) => {
  switch (action.type) {
    case 'GET_WATCHING_LIST':
      return {
        watching_repositories: action.results
      };
    case 'RELOAD':
      console.log(action.result)
      return {
        watching_repositories: action.result
      };
    default:
      return state
  }
}

export default watchingList
