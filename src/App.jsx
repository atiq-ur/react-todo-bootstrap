import { useState } from 'react';
import ToDo from './components/ToDo.jsx';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	//Task todo state
	const [toDo, setToDo] = useState([
		{ id: 1, title: 'Task 1', completed: false },
		{ id: 2, title: 'Task 2', completed: false },
		{ id: 3, title: 'Task 3', completed: false },
	]);

	//Temp State
	const [newTask, setNewTask] = useState('');
	const [updateData, setUpdateData] = useState('');

	//Add Task
	const addTask = () => {
		if (newTask === '') {
			alert('Please enter a task');
			return;
		}
		const newToDo = {
			id: toDo.length + 1,
			title: newTask,
			completed: false,
		};
		setToDo([...toDo, newToDo]);
		setNewTask('');
	};

	//Delete Task
	const deleteTask = (id) => {
		const updatedToDo = toDo.filter((task) => task.id !== id);
		setToDo(updatedToDo);
	};

	const markDone = (id) => {
		const updatedToDo = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status };
			}
			return task;
		});
		setToDo(updatedToDo);
	};

	const cancelUpdate = () => {
		setUpdateData('');
	};

	const updateTask = (id) => {
		let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
		let updatedObject = [...filterRecords, updateData];
		setToDo(updatedObject);
		setUpdateData('');
	};

	const changeTask = (e) => {
		let newEntry = {
			id: updateData.id,
			title: e.target.value,
			status: updateData.status ? true : false,
		};
		setUpdateData(newEntry);
	};

	return (
		<>
			<div className='container App'>
				<br />
				<br />
				<h2>To Do List App (ReactJS)</h2>
				<br />
				<br />
				{updateData && updateData ? (
					<UpdateForm
						updateData={updateData}
						changeTask={changeTask}
						updateTask={updateTask}
						cancelUpdate={cancelUpdate}
					/>
				) : (
					<AddTaskForm
						newTask={newTask}
						setNewTask={setNewTask}
						addTask={addTask}
					/>
				)}
				{/* Display ToDO */}
				{toDo && toDo.length ? '' : <h3>No Task</h3>}
				<ToDo
					toDo={toDo}
					markDone={markDone}
					setUpdateData={setUpdateData}
					deleteTask={deleteTask}
				/>
			</div>
		</>
	);
}

export default App;

