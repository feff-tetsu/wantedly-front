import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui-icons/Star';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import reload from '../actions'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import { checkStatus, parseJSON, sharedApi } from '../lib/api'


let Repository = ({ name, owner, description, full_name, access_token, dispatch, reloadWatchingList }) => (
    <div>
      <ListItem
        button
        onClick={e => {
          sharedApi.putWatching(full_name, access_token)
          .then(checkStatus)
          .then(
            sharedApi.reloadWatchingList(access_token)
              .then(checkStatus)
              .then(parseJSON)
              .then(result => {
                console.log(result)
              }))
        }
        }
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

Repository = connect()(Repository)


export default Repository
