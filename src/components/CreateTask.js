import React from "react";
import TaskForm from "./TaskForm";
import axios from "axios";

const CreateTask = (props) => {
    const onSubmit = (taskObject) => {
        axios
            .post("http://localhost:4000/tasks/add-task", taskObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Task successfully created");
                    props.history.push("/task-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <TaskForm onSubmit={onSubmit}>Create Task</TaskForm>
    );
};

export default CreateTask;