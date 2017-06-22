import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Repository from '../components/Repository'
import { checkStatus, parseJSON } from '../lib/api'
import getWatchingList from '../actions/index'
import store from '../store'

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

class WatchingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 40,
    };
  }

  render() {
    return (
      <div>
        <List>

        </List>
      </div>
    );
  }
}
WatchingList = connect(mapStateToProps, mapDispatchToProps)(WatchingList)

export default WatchingList
