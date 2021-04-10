import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export default function NavTabs({ tab, changeTab }) {
  const handleChange = (event, newValue) => {
    changeTab(newValue);
  };

  return (
    <Tabs
      value={tab}
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
