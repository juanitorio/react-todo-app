import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
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
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header />
                    <TodoList todos={this.state.todos} />
                </div>
            </div>
        );
    }
}

export default App;
