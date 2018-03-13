import * as React from 'react'
import Typography from 'material-ui/Typography';
import { Toolbar, AppBar, Grid, Button } from 'material-ui';

export const MainContainer = () => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Pomodoro
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid
      container
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Button variant="raised">Dupa</Button>
      </Grid>
    </Grid>
  </div>
)

