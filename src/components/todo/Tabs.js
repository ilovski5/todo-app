import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon label tabs example"
    >
      <Tab icon={<AssignmentTurnedInIcon />} label="TODO" />
      <Tab icon={<DoneAllIcon />} label="DONE" />
    </Tabs>
  );
}
