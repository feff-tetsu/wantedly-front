const searchResults = (state = {repositories:[]}, action) => {
  switch (action.type) {
    case 'GET_SEARCH_RESULTS':
      return {
          repositories: action.results,
      };
    default:
      return state
  }
}

export default searchResults
