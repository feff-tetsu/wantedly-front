
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
    results,
  }
}

export const getWatchingList = results => {
  return {
    type: 'GET_WATCHING_LIST',
    results,
  }
}

export const reload = result => {
  return {
    type: 'RELOAD',
    result,
  }
}

export const reloadWatchingList = results => {
  return {
    type: 'RELOAD_WATCHING_LIST',
    results,
  }
}

export const saveAccessToken = result => {
  return {
    type: 'SAVE_ACCESS_TOKEN',
    result,
  }
}

export const toggleUnwatchRepository = (repositories, id) => {
  return {
    type: 'TOGGLE_UNWATCH_REPOSITORY',
    repositories,
    id,
  }
}

export const addWatchRepository = (repositories, repo) => {
  return {
    type: 'ADD_WATCH_REPOSITORY',
    repositories,
    repo,
  }
}

export const saveSearchUserName = user_name => {
  return {
    type: 'SAVE_SEARCH_USER_NAME',
    user_name,
  }
}
