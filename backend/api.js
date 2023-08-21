const express = require("express");
const cors = require("cors")
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/tasks/create", async (req, res) => {
  try { 
    const { title, content } = req.body;
    const task = await prisma.task.create({
      data: {
        title: title,
        content: content,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.delete("/tasks/delete", async(req, res) => {
  try {
    const { id } = req.body
    await prisma.task.delete({
      where : {
        id : id
      }
    })
    res.status(200).send("Task deleted")
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: "An error occurred" });
  }
})


app.put("/tasks/update", async(req, res) => {
  try {
    const { id, title, content } = req.body
    const updatedTask = await prisma.task.update({
      where : {
        id : id
      },
      data : {
        title: title,
        content: content,
        edited: true,
        editedAt: new Date()
      }
    })
    res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "An error occurred" });
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
