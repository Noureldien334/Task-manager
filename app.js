const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

require('dotenv').config()
//middleware

app.use(express.static('./public'))
app.use(express.json())
// app routes
app.use('/api/v1/tasks', tasks)

const port = 4000
const start = async ()=> {
	try{
		await connectDB(process.env.MONGO_URI)
		
		app.listen(port, console.log(`server is listening on port ${port}..`))
	}
	catch(err){
		console.log(err);
}

}
start()
