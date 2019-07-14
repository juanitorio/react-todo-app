import React, { Component } from "react";

export default class Todo extends Component {
    render() {
        return (
            <li>
                <label style={{ textDecoration: this.props.todo.completed ? "line-through" : "none" }}>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, this.props.todo.id)} /> {this.props.todo.task}
                </label>
            </li>
        );
    }
}
