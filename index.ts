import express, { Application } from 'express'
import { config } from 'dotenv'
import userRoutes from './routes/user'
import { connect } from 'mongoose'
// import { Mongoose } from 'mongoose'

/**
 * Load .env variables
 */
config()
/**
 * Initialize express app
 */
const app: Application = express()
/**
 * Use express built-in middlewares for parsing body and cors
 */
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
/**
 * Initialize mongoose
 */
connect(process.env.MONGO_URI as string, {
  autoIndex: false,
})

/**
 * Add user routes into main app
 */
app.use('/user', userRoutes)

/**
 * Running express at port
 */
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Running at port ${port}`)
})
