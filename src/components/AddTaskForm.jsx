const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
	return (
		<>
			<div className='row'>
				<div className='col'>
					<input
						type='text'
						className='form-control form-control-lg'
						onChange={(e) => setNewTask(e.target.value)}
						value={newTask}
					/>
				</div>

				<div className='col-auto'>
					<button onClick={addTask} className='btn btn-lg btn-success mb-2'>
						Add Task
					</button>
				</div>
			</div>
		</>
	);
};

export default AddTaskForm;

