import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/tasks/")
            .then((res) => {
                setTaskList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteTask = (id) => {
        axios
            .delete("http://localhost:4000/tasks/delete-task/" + id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Task successfully deleted");
                    setTaskList(taskList.filter((task) => task._id !== id));
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <div className="task-list">
            <h3>Task List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task) => (
                        <tr key={task._id}>
                            <td>{task.description}</td>
                            <td>{task.category}</td>
                            <td>{task.dueDate}</td>
                            <td>
                                <Link
                                    to={"/edit-task/" + task._id}
                                    className="btn btn-primary"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteTask(task._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;