const Task = require('../models/Task')

const getAlltasks = async (req, res) => {
	try{
	 const tasks = await Task.find({});
	 res.status(200).json({tasks})
	} catch (error){
	  res.status(500).json({msg: error})
	}
}

const createTask = async (req, res) => {
	try{
	const task = await Task.create({
		name: req.body.name,
		completed: req.body.completed
	})
	res.status(201).json({task})}
	catch(err){
	res.status(500).json({msg: err})
	}
}
const getTask = async (req, res) => {
	try{
	const {id} = req.params
	const task = await Task.findOne({_id:id});
	if(!task){
	 return res.status(404).json({msg: "Task isn't found"})
	}
	res.status(200).json({task})
	} catch(error){
		res.status(500).json({msg:error})
	}
}
const updateTask= async (req, res) => {
	try{
	const {id: taskID} = req.params
	const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
	 new:true, runValidators:true,
	})
	if(!task){
	 return res.status(404).json({msg: "Task isn't found"})
	}
	res.status(200).json({task})
	} catch(error){
		res.status(500).json({msg: error})
	}
}
const deleteTask = async (req, res) => {
	try{
	   const {id} = req.params
	   const del_task = await Task.findOneAndDelete({_id:id})
	   if(!del_task){
	 	return res.status(404).json({msg: "Task isn't found"})
	   }
	   res.status(200).json({del_task})
	} catch(error){
	   res.status(500).json({msg:error})
	}
}

module.exports = {
   getAlltasks,
   getTask,
   createTask,
   updateTask,
   deleteTask,
}
