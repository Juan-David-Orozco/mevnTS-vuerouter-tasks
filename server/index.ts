import app from './app'
import { startConnection } from "./database";
import { PORT } from './config'

startConnection()
app.listen(PORT)
console.log('Server on port',PORT)