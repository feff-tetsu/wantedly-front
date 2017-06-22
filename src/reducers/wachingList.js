const watchingList = (state = {watching_repositories:[]}, action) => {
  switch (action.type) {
    case 'GET_WATCHING_LIST':
      return {
          watching_repositories: action.results
          };
    default:
      return state
  }
}

export default watchingList
