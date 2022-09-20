import { connect } from 'mongoose'

export const startConnection = async () =>  {
    try {
        const db = await connect('mongodb://localhost/mevn-db1')
        console.log(db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

