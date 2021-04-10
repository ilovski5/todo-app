import React, { useEffect, useState } from 'react';
import Create from '../components/todo/Create';
import Paper from '@material-ui/core/Paper';
import NavTabs from '../components/todo/Tabs';
import Tasks from '../components/todo/Tasks';
import { ToDoStore } from '../lib/store/todo';
import API from '../lib/utils/fetcher';

const ToDo = () => {
  const [tab, setTab] = useState(0);
  const { updateList } = ToDoStore.getState();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    API.getAll().then(res => updateList(res));
  };

  const changeTab = (current) => {
    setTab(current);
  };

  return (
    <>
      <Create />
      <Paper square>
        <NavTabs tab={tab} changeTab={changeTab} />
        <Tasks tab={tab} />
      </Paper>
    </>
  )
}

export default ToDo;
