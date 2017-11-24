import { join } from 'path'
import { readFileSync } from 'fs'
import * as http2 from 'spdy'
import * as express from 'express'

const port: number = 9000
const options = {
    key: readFileSync(join(__dirname, '../src/certs/localhost.key')),
    cert: readFileSync(join(__dirname, '../src/certs/localhost.crt'))
}

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'))
})

const server = http2.createServer(options, app)
server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
