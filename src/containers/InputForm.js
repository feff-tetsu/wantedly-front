import React from 'react'
import { connect } from 'react-redux'
import { changeValue } from '../actions'
import TextField from 'material-ui/TextField';

const KEY_ENTER = 13



let AddTodo = ({ dispatch }) => {

  return (
    <div>
     <TextField
        onChange={e => {
           dispatch(changeValue(e.target.value))
        }}
     />
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
