const searchWords = (state = {user_name: '', word: ''}, action) => {
  switch (action.type) {
    case 'SAVE_SEARCH_USER_NAME':
      return {
        word: action.word,
        user_name: action.user_name,
      };
    case 'SAVE_SEARCH_WORD':
      return {
        word: action.word,
        user_name: action.user_name,
      }
    default:
      return state
  }
}

export default searchWords
