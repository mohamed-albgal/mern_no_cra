import express from 'express'
const CURRENT_WORKING_DIR = process.cwd()
import path from 'path'
import template from './../template'
import devBundle from './devBundle'

const app = express()
//this makes it so the server serves the staic files from the /dist directory if the request route is /dist
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
// this is supposed to make it easier to develop in dev mode (unsure of this)
devBundle.compile(app)


app.get('/', (req,res) => {
	res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
	if (err) {
		console.log(err)
	}
	console.info(`Server started on port ${port}.`)
})