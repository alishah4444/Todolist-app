import React, { FC, ChangeEvent } from 'react';

//props interface
interface AddTaskFormProps {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ newTask, setNewTask, addTask }) => {

    //
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    return (
        <div className={"task-form"}>
            <input
                type="text"
                title="New Task"
                placeholder='Add New Task'
                value={newTask}
                onChange={handleChange}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;
