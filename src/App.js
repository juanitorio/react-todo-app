import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
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
            <Router>
                <div className="App">
                    <div className="App-header">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo formSubmit={this.formSubmit} />
                                    <TodoList todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} />
                                </React.Fragment>
                            )}
                        ></Route>
                        <Route path="/about" component={About}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
