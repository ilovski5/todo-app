import React, { useEffect, useState } from 'react';
import Create from '../components/todo/Create';
import Paper from '@material-ui/core/Paper';
import NavTabs from '../components/todo/Tabs';
import Tasks from '../components/todo/Tasks';
import EditModal from '../components/todo/editModal';
import { ToDoStore } from '../lib/store/todo';
import API from '../lib/utils/fetcher';

const ToDo = () => {
  const [tab, setTab] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
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

  const editItem = (current) => {
    setCurrentItem(current);
  };

  return (
    <>
      <Create />
      <EditModal currentItem={currentItem} editItem={editItem} />
      <Paper square>
        <NavTabs tab={tab} changeTab={changeTab} />
        <Tasks tab={tab} editItem={editItem} />
      </Paper>
    </>
  )
}

export default ToDo;
