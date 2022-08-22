const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name:{
	 type: String,
	 trim: true,
	 required:[true, 'must provide name'],
	 maxLength: [20, `Task name can't be more than 20 characters long`]
	},
	completed:{
	 type: Boolean,
	 default: false
	}
})

module.exports = mongoose.model('Task',TaskSchema)
