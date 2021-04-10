import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../lib/utils/fetcher';
import { ToDoStore } from '../../lib/store/todo';

const useStyles = makeStyles(() => ({
  root: {
    padding: 30,
    marginBottom: 50,
  },
  action: {
    marginTop: 30,
  },
}));

export default function Create() {
  const { updateList } = ToDoStore.getState();
  const classes = useStyles();
  const [text, setText] = useState('');

  const addToDo = async () => {
    await API.create({ text, done: false });
    const all = await API.getAll();
    updateList(all);
    setText('');
  };

  return (
    <Paper square className={classes.root}>
      <TextField
        id="standard-basic"
        fullWidth
        label="Todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
        className={classes.action}
        disabled={!text}
        onClick={addToDo}
      >
        Submit
      </Button>
    </Paper>
  );
}
