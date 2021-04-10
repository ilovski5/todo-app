import React from 'react';
import Create from '../components/todo/Create';
import Paper from '@material-ui/core/Paper';
import NavTabs from '../components/todo/Tabs';
import Tasks from '../components/todo/Tasks';

const ToDo = () => {
  return (
    <>
      <Create />
      <Paper square>
        <NavTabs />
        <Tasks />
      </Paper>
    </>
  )
}

export default ToDo;
