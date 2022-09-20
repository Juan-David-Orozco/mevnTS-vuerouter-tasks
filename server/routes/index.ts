import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find()
  if(!tasks) return res.status(400).json({message: "Tasks not found"})
  return res.status(200).json({
    message: "Get all tasks",
    data: tasks
  })
})

router.get('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id
    const task = await Task.findById(taskId)
    if(!task) return res.status(404).json({message: "Task not found"})
    return res.status(200).json({
      message: "Get task by Id",
      data: task
    })
  } catch (error) {
    return res.status(500).json({message: error})
  }
})

router.post('/tasks', async (req, res) => {
  try {
    const {title, description, done} = req.body
    const newTask: any = new Task({
      title, description, done
    })
    await newTask.save()
    return res.status(201).json({
      message: "Created a task",
      newTask: newTask
    })
  } catch (error) {
    return res.status(500).json({message: error})
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id
    const deletedTask = await Task.findByIdAndDelete(taskId)
    if(!deletedTask) return res.status(404).json({message: "Task not found"})
    return res.status(204).json({message: "Deleted a task"})
  } catch (error) {
    return res.status(500).json({message: error})
  }
})

router.put('/tasks/:id', async (req, res) => {
  try {
    const taskId: any = req.params.id
    const updatedTask = await Task.findByIdAndUpdate(
      taskId, req.body, {new: true}
    )
    console.log(updatedTask)
    if(!updatedTask) return res.status(404).json({message: "Task not found"})
    return res.status(200).json({
      message: "Updated a task",
      updatedTask: updatedTask
    })
  } catch (error) {
    return res.status(500).json({message: error})
  }
})

export default router
