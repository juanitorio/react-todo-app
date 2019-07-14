import React, { Component } from "react";

export default class Todo extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" /> {this.props.todo.task}
                </label>
            </li>
        );
    }
}
