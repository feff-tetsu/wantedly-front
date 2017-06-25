import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui-icons/Star';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { toggleUnwatchRepository, addWatchRepository } from '../actions'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import { checkStatus, sharedApi } from '../lib/api'

function mapStateToProps(state) {
  return {
    access_token: state.saveAccessToken.access_token,
    repositories: state.watchingList.watching_repositories,
  };
}

let Repository = ({ name, owner, description, full_name, id, access_token, repositories, dispatch }) => (
    <div>
      <ListItem
        button
        onClick={e => {
          sharedApi.getRepositoryStatus(full_name, access_token)
          .then(response => {
            if (response.status === 200) {
              sharedApi.deleteWatching(full_name,access_token)
              .then(checkStatus)
              .then(
                dispatch(toggleUnwatchRepository( repositories, id))
              )
            } else if (response.status === 404) {
              sharedApi.putWatching(full_name, access_token)
              .then(checkStatus)
              .then(
                dispatch(addWatchRepository( repositories, { name: name, owner: owner, full_name: full_name, id: id }))
              )
            } else if (response.status === 401) {
              alert('アクセストークンを入力してください．')
            } else {
              const error = new Error(response.statusText);
              error.response = response;
              throw error;
            }
          })
          .catch(alert('エラーが発生しました．時間をおいてもう一度お試しください．'))
        }}
      >
        <Avatar src={owner.avatar_url} />
        <ListItemText primary={name} secondary={description} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <StarIcon color='action'/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider inset={true} />
    </div>
  )

Repository = connect(mapStateToProps)(Repository)


export default Repository
