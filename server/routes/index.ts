import { Router } from 'express'
const router = Router()

router.get('/tasks', (req, res) => {
  res.send("Get all tasks")
})

router.get('/tasks/:id', (req, res) => {
  res.send("Get a task by ID")
})

router.post('/tasks', (req, res) => {
  res.send("Create a task")
})

router.delete('/tasks/:id', (req, res) => {
  res.send("Delete a task")
})

router.put('/tasks/:id', (req, res) => {
  res.send("Update a task")
})

export default router
