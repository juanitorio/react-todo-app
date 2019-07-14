import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: uuid(),
                task: "Learn JavaScript",
                completed: false
            },
            {
                id: uuid(),
                task: "Learn ES6+",
                completed: false
            },
            {
                id: uuid(),
                task: "Learn React",
                completed: false
            }
        ]
    };

    markCompleted = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    deleteTodo = id => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    };

    formSubmit = value => {
        const newTodo = {
            id: uuid(),
            task: value,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header />
                    <AddTodo formSubmit={this.formSubmit} />
                    <TodoList todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} />
                </div>
            </div>
        );
    }
}

export default App;
