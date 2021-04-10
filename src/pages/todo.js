import React from 'react';
import Create from '../components/todo/Create';
import Paper from '@material-ui/core/Paper';
import NavTabs from '../components/todo/Tabs';

const ToDo = () => {
  return (
    <>
      <Create />
      <Paper square>
        <NavTabs />
      </Paper>
    </>
  )
}

export default ToDo;
