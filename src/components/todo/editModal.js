import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { ToDoStore } from '../../lib/store/todo';
import API from '../../lib/utils/fetcher';

const EditModal = ({ currentItem, editItem }) => {
  const { updateList } = ToDoStore.getState();
  const [text, setText] = useState('');

  useEffect(() => {
    if (!!currentItem) {
      setText(currentItem.text);
    } else {
      setText('');
    }
  }, [currentItem]);

  const closeModal = () => {
    editItem(null);
  };

  const save = async () => {
    await API.update({ ...currentItem, text });
    closeModal();
    const all = await API.getAll();
    updateList(all);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={!!currentItem}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">{'Edit Todo'}</DialogTitle>
      <DialogContent>
        <TextField
          id="standard-basic"
          fullWidth
          label="Todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={save}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
};

export default EditModal;
