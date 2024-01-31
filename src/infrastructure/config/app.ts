import express from 'express'
// import userRouter from '..'

export const createServer = () => {
    try {
        const app = express()
        app.use(express.json())

        app.use('/api/user')

        return app
    } catch (error) {
    console.log(error)        
    }
}

