import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
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

    async componentDidMount() {
        const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

        if (todosFromLocalStorage) await this.setState({ todos: todosFromLocalStorage });
    }

    markCompleted = async id => {
        await this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });

        this.saveToLocalStorage();
    };

    deleteTodo = async id => {
        await this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

        this.saveToLocalStorage();
    };

    formSubmit = async value => {
        const newTodo = {
            id: uuid(),
            task: value,
            completed: false
        };
        await this.setState({
            todos: [...this.state.todos, newTodo]
        });

        this.saveToLocalStorage();
    };

    saveToLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    };

    render() {
        return (
            <Router basename="/">
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
