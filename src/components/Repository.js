import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui-icons/Star';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

const Repository = ({ name, owner, description }) => (
    <div>
      <ListItem button>
        <Avatar src={owner.avatar_url} />
        <ListItemText primary={name} secondary={description} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <StarIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider inset={true} />
    </div>
  )

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.object,
  description: PropTypes.string,
}

export default Repository
