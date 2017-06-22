import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Repository from '../components/Repository'

function mapStateToProps(state) {
  return {
    repositories: state.searchResults.repositories,
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
            <Repository key={repository.id} {...repository} />
          )
        })}
      </List>
    </div>
  )
}
SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResults
