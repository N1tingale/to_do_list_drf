import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { Stack, IconButton, Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import axios from "axios";


export default function EditTask({ open, setOpen, task, setTasks }) {

  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);




  const handleEditClick = () => {
    const editedTitle = titleInputRef.current.value;
    const editedDescription = descriptionInputRef.current.value;

    const updatedTask = { ...task, title: editedTitle, content: editedDescription };

    axios.put(`http://localhost:3000/tasks/update`, 
    {    
             id: task.id, 
             title: editedTitle,
             content: editedDescription, 
    })
    .then(res => {
      setTasks(tasks => tasks.map(t => t.id !== task.id ? t : res.data))
    })
    .catch(err => console.log(err))

    setOpen(false);
  };


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#ffecb3",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  };

  const handleClose = () => setOpen(false);

  const CustomTextField = styled(TextField)({
    "& .MuiInput-root::after": {
      borderBottom: "2px solid #b3c6ff",
    },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit task
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "black" }} />
            </IconButton>
          </Stack>
          <CustomTextField
            inputRef={titleInputRef}
            placeholder="Type your task title here..."
            defaultValue={task.title}
            variant="standard"
          />
          <CustomTextField
            inputRef={descriptionInputRef}
            defaultValue={task.content}
            sx={{ mt: 3 }}
            fullWidth
            id="standard-multiline-flexible"
            placeholder="Type your task here..."
            multiline
            maxRows={7}
            variant="standard"
          />
          <Fab
            onClick={handleEditClick}
            variant="extended"
            sx={{
              alignSelf: "center",

              mt: 3,
              color: "black",
              bgcolor: "#b3ffec",
              ":hover": {
                bgcolor: "#b3ffec",
              },
            }}
          >
            <EditIcon sx={{ mr: 1 }} />
            Save Edit
          </Fab>
        </Box>
      </Modal>
    </>
  );
}
