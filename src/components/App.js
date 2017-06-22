import React from 'react'
import InputForm from '../containers/InputForm'
import SearchResult from '../containers/SearchResults'
import WatchingList from '../containers/WatchingList'
import InputAccessToken from '../containers/InputAccessToken'
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

const App = (store) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Grid container gutter={16}>
        <Grid item xs={6}>
          <Grid item xs={10}>
            <InputForm />
            <SearchResult />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={10}>
            <InputAccessToken />
            <WatchingList />
          </Grid>
        </Grid>
      </Grid>
    </div>
  </MuiThemeProvider>
)

export default App
