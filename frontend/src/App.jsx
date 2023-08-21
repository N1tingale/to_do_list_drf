import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Tasks from "./components/Tasks";
import { Grid, Typography, Fab, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask"
import VisibilityIcon from '@mui/icons-material/Visibility';
function App() {

  const [tasks, setTasks] = useState([]);

  const [editTask, setEditTask] = useState({})

  const [showCompleted, setShowCompleted] = useState(false)

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const handleOpen = () => setOpenCreateTask(true);

  const [openEditTask, setOpenEditTask] = useState(false)


  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => setTasks(res.data));
  }, []);


  return (
    <>
    <EditTask setTasks={setTasks} task={editTask} open={openEditTask} setOpen={setOpenEditTask}/>
    <CreateTask open={openCreateTask} setOpen={setOpenCreateTask} setTasks={setTasks}/>
    <Stack direction="column">
      <Typography variant="h3" textAlign="center" sx={{mt:5}}>
        Tasks
      </Typography>
      
      <Stack direction="row" alignSelf="center">
        <Fab onClick={handleOpen} sx={{mr: 1, pl:5, pr:5, mt: 5, color:"black", bgcolor:"#b3c6ff", ":hover":{
          bgcolor:"#b3c6ff"
        }}} color="primary" aria-label="add" variant="extended">
            <AddIcon />
            Add task
          </Fab>
          <Fab onClick={() => {setShowCompleted(value => !value)}} sx={{ml: 1, mt: 5, color:"black", bgcolor:!showCompleted ? "#ffc6b3" : "#ecffb3", ":hover":{
          bgcolor:!showCompleted ? "#ffc6b3" : "#ecffb3"
        }}} color="primary" aria-label="add" variant="extended">
            <VisibilityIcon sx={{mr: 1}}/>
            View {showCompleted ? "uncompleted" : "completed"} 
          </Fab>
      </Stack>
        </Stack>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ minHeight: "100vh", mt: 5 }}
      >
          <Tasks showCompleted={showCompleted} setEditTask={setEditTask} setOpenEditTask={setOpenEditTask} tasks={tasks} setTasks={setTasks}/>
      </Grid>
      
    </>
  );
}

export default App;
