import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Repository from '../containers/Repository'

function mapStateToProps(state) {
  return {
    repositories: state.searchResults.repositories,
    accessToken: state.saveAccessToken.access_token,
    loading: state.searchResults.loading,
  };
}

let SearchResults = (SearchResults) => {
  if(SearchResults.repositories.length === 0) {
    return (
      <div>
        No Result
      </div>
    )
  } else {
    return (
      <div>
        <List>
          {SearchResults.repositories.map(repository => {
            return(
              <Repository
                key={repository.id}
                access_token={SearchResults.accessToken}
                {...repository}
              />
            )
          })}
        </List>
      </div>
    )
  }
}
SearchResults = connect(mapStateToProps)(SearchResults)

export default SearchResults
