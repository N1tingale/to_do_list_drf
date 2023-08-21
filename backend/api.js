const express = require("express")

const app = express()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.get('/tasks-get', async (req, res) => {
    try {
      const tasks = await prisma.task.findMany();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });