import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Repository from '../containers/Repository'

//const PRIVATE_ACCESS_TOKEN = '3c6def5505e87df630934250458e1df0e9011500'

function mapStateToProps(state) {
  return {
    repositories: state.watchingList.watching_repositories,
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

let WatchingList = (WatchingList) => {
  return (
    <div>
      <List>
        {WatchingList.repositories.map(repository => {
          return(
            <Repository key={repository.id} {...repository} />
          )
        })}
      </List>
    </div>
  );
}
WatchingList = connect(mapStateToProps, mapDispatchToProps)(WatchingList)

export default WatchingList
