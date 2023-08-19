import React from 'react'; 
import Task from './Task';
import { Stack } from '@mui/material';
import { useState } from 'react';
export default function Tasks({ tasks, setTasks, setOpenEditTask, setEditTask }) {
const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack>
      {tasks.map(task => <Task setEditTask={setEditTask} setOpenEditTask={setOpenEditTask} key={task.id} task={task} setTasks={setTasks} expanded={expanded} handleChange={handleChange}/>)}
    </Stack>
  );
}