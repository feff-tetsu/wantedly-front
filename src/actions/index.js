
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const changeValue = text => {
  return {
    type: 'CHANGE_VALUE',
    text
  }
}

export const getSearchResults = results => {
  return {
    type: 'GET_SEARCH_RESULTS',
    results
  }
}

export const getWatchingList = results => {
  console.log(results)
  return {
    type: 'GET_WATCHING_LIST',
    results
  }
}
