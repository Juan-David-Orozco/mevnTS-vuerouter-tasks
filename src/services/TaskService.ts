import axios from './axios'
import { AxiosResponse } from 'axios'
import { Task } from '@/interfaces/Task'

export const createTask = async (task: Task) => {
  return await axios.post('/tasks', task)
}

export const getTasks = async (): Promise<AxiosResponse> => {
  return await axios.get('/tasks')
}

export const getTask = async (id: string) => {
  return await axios.get(`/tasks/${id}`)
}

export const updateTask = async (id: string, task: Task) => {
  return await axios.put(`/tasks/${id}`, task)
}

export const deleteTask = async (id: string) => {
  return await axios.delete(`/tasks/${id}`)
}