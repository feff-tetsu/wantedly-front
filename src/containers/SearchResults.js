import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Repository from '../containers/Repository'

function mapStateToProps(state) {
  return {
    repositories: state.searchResults.repositories,
    accessToken: state.saveAccessToken.access_token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

let SearchResults = (SearchResults) => {
  return (
    <div>
      <List>
        {SearchResults.repositories.map(repository => {
          return(
            <Repository
              key={repository.id}
              access_token={SearchResults.accessToken}
              {...repository} />
          )
        })}
      </List>
    </div>
  )
}
SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResults
