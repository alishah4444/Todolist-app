import React, { FC } from 'react'
import { Task } from '../App';
import Badge from './Badge';

//props for task list
interface taskListProps {
    tasks: Task[];
    toggleTask: (taskId: number) => void;
    deleteTask: (taskId: number) => void;

}


// destructing props
const TaskList: FC<taskListProps> = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <div className='task-card'>
            {tasks.map((task) => (
                <div className='task-card-list' key={task.id}>
                    <div className="task-subcard">
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)} //toggle to between completed and uncompleted status
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                            {/* additional badge component i added to display completed or not */}
                            {task.completed ? <Badge label="Complete" color="success" /> : null}

                        </div>
                        {/* delete task handler */}
                        <button className='task-card-del-btn' onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default TaskList