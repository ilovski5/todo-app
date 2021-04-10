import React, { useEffect } from 'react';
import Create from '../components/todo/Create';
import Paper from '@material-ui/core/Paper';
import NavTabs from '../components/todo/Tabs';
import Tasks from '../components/todo/Tasks';
import { ToDoStore } from '../lib/store/todo';
import API from '../lib/utils/fetcher';

const ToDo = () => {
  const { updateList } = ToDoStore.getState();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    API.getAll().then(res => updateList(res));
  };

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
