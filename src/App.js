import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                task: "Learn JavaScript",
                completed: false
            },
            {
                id: 2,
                task: "Learn ES6+",
                completed: false
            },
            {
                id: 3,
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
            id: 4,
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
