import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RequestsStore } from '../lib/store/spinner';

const LoadingScreen = () => {
  const open = RequestsStore(state => state.open);
  return (
    <Backdrop open={open} style={{ zIndex: 10000 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
};

export default LoadingScreen;
