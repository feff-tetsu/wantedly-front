const searchWords = (state = {user_name: ''}, action) => {
  switch (action.type) {
    case 'SAVE_SEARCH_USER_NAME':
      return {
        user_name: action.user_name,
      };
    default:
      return state
  }
}

export default searchWords
