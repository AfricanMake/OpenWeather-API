import express, {Application, Request, Response } from 'express'
import { getAverageHigh } from '../src/service/getAverageHigh'
import { getAverageLow } from '../src/service/getAverageLow'
import { getMaximumHigh } from '../src/service/getMaximumHigh'


const app: Application = express()
const PORT = 8000
const router = express.Router()
global.fetch = require('node-fetch')

let result = {}

router.get('/', async (req: Request, res: Response) => {
    try {
        res.send('Express + TypeScript Server')
    } catch (err) {
        console.error(err.message)
        res.json({ error: err.message || err.toString() });
    }
})

router.get('/getAverageHigh', async (req: Request, res: Response) => {
    try {
        result = await getAverageHigh()
        res.json(result)
    } catch (err) {
        console.error(err.message)
        res.json({ error: err.message || err.toString() });
    }
})

router.get('/getAverageLow', async (req: Request, res: Response) => {
    try {
        result = await getAverageLow()
        res.json(result)
    } catch (err) {
        console.error(err.message)
        res.json({ error: err.message || err.toString() });
    }
})


router.get('/getMaximumHigh', async (req: Request, res: Response) => {
    try {
        result = await getMaximumHigh()
        res.json(result)
    } catch (err) {
        console.error(err.message)
        res.json({ error: err.message || err.toString() });
    }
})


app.get('/', (req, res) => {
    res.send('Enter /api path followed by the required path. Example: /api/getAverageHigh')
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

