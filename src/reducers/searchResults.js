const searchResults = (state = {text:''}, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
          text: action.text
          };
    default:
      return state
  }
}

export default searchResults
