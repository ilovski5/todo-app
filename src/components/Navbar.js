import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {'TODO APP'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
