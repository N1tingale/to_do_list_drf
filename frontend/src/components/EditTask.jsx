import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { Stack, IconButton, Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export default function CreateTask({ open, setOpen, task }) {
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
              Create task
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "black" }} />
            </IconButton>
          </Stack>
          <CustomTextField
            placeholder="Type your task title here..."
            value={task.title}
            variant="standard"
          />
          <CustomTextField
            value={task.description}
            sx={{ mt: 3 }}
            fullWidth
            id="standard-multiline-flexible"
            placeholder="Type your task here..."
            multiline
            maxRows={7}
            variant="standard"
          />
          <Fab
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
            <EditIcon sx={{mr:1}}/>
            Edit Task
          </Fab>
        </Box>
      </Modal>
    </>
  );
}
