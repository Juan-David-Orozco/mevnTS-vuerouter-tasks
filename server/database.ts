import mongoose from 'mongoose'
import { MONGODB_URI } from './config'

export const startConnection = async () =>  {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB connected - DB: ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
}