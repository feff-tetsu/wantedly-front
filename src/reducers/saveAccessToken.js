const saveAccessToken = (state = { access_token: '' }, action) => {
  switch (action.type) {
    case 'SAVE_ACCESS_TOKEN':
      return {
        access_token: action.result,
      };
    default:
      return state
  }
}

export default saveAccessToken
