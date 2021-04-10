import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ToDoStore } from '../../lib/store/todo';
import API from '../../lib/utils/fetcher';

const Tasks = ({ tab }) => {
  const todos = ToDoStore(state => state.todos);
  const { updateList } = ToDoStore.getState();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const removeTask = async (id) => {
    await API.remove(id);
    const all = await API.getAll();
    updateList(all);
  };

  const markDone = async (item) => {
    await API.update({ ...item, done: !item.done });
    const all = await API.getAll();
    updateList(all);
  }

  return (
    <List>
      {todos.filter(t => t.done === !!tab).map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;
        return (
          <ListItem key={item.id} dense button onClick={handleToggle(item)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onChange={() => markDone(item)}
                checked={item.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                color="secondary"
                onClick={() => removeTask(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  );
};

export default Tasks;
