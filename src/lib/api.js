export function parseJSON(response) {
  return response.json();
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) return response;
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

class Api {
  reloadWatchingList(token) {
    return fetch('https://api.github.com/user/subscriptions?access_token='+token)
  }

  deleteWatching(full_name, token) {
    return fetch('https://api.github.com/repos/'+full_name+'/subscription',
    {method: 'DELETE',
     headers: { Authorization:'token '+ token },
     })
  }

  putWatching(full_name, token) {
    return fetch('https://api.github.com/repos/'+full_name+'/subscription',
    {method: 'PUT',
     headers: { Authorization:'token '+ token },
     body: JSON.stringify({
       subscribed: true,
     }),
    })
  }

  getRepositoryStatus(full_name, token) {
    return fetch('https://api.github.com/repos/'+full_name+'/subscription',
      {headers: { Authorization:'token '+ token}}
    )
  }

  getRepositoriesSearch(words) {
    return fetch('https://api.github.com/search/repositories?q='+words)
  }
}

export const sharedApi = new Api();
