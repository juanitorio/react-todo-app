import React, { Component } from "react";

export default class Todo extends Component {
    render() {
        const { id, task, completed } = this.props.todo;
        return (
            <li>
                <label style={{ textDecoration: completed ? "line-through" : "none" }}>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} checked={completed} /> {task}
                </label>
                <button className="btn-delete" onClick={this.props.deleteTodo.bind(this, id)}>
                    X
                </button>
            </li>
        );
    }
}
