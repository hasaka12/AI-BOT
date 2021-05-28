import React from 'react';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import IMG1 from './bot-1.png';
import IMG2 from './child.png';
import Content from './Content';
import './App.css';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#f2f2f0',
  },
  imgContainer: {
    width: 220,
  },
  content: {
    marginTop: 10,
  }
}));

const App = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1200px)');

  if (!matches) {
    return (
        <Paper elevation={8}>
          <div className={classes.content}>
            <Content />
          </div>
        </Paper>
    );
  }
  return (
    <>
        <Grid container spacing={1} direction="row" alignItems="center">
          <Grid item xs={12} sm={2}>
            <img src={IMG2} alt="bot" className={classes.imgContainer} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.container} elevation={8}>
              <div className={classes.content}>
                <Content />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img src={IMG1} alt="bot" className={classes.imgContainer} />
          </Grid>
        </Grid>
    </>
  );
};
export default App;
