
const express = require('express')
const path = require('path')
const app = express();

// app.use(express.static(__dirname + '/csc309selfproject'))
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname+ '/csc309selfproject', '/landing.html'))
// })

// static js directory
app.use("/", express.static(path.join(__dirname, '/csc309selfproject')))

// route for root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/csc309selfproject/landing.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})
