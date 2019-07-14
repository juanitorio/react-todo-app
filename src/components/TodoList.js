import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((current, index) => (
                    <Todo key={index} todo={current} markCompleted={this.props.markCompleted} />
                ))}
            </ul>
        );
    }
}
