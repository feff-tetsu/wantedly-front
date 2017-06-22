const watchingList = (state = {repositories:[]}, action) => {
  switch (action.type) {
    case 'GET_WATCHING_LIST':
      return {
          repositories: action.results
          };
    default:
      return state
  }
}

export default watchingList
