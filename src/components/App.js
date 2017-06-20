import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { purple, green, red } from 'material-ui/styles/colors';
import Grid from 'material-ui/Grid';

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together.
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  }),
});


const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Grid container gutter={12}>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <AddTodo />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <VisibleTodoList />
        </Grid>
      </Grid>
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App
