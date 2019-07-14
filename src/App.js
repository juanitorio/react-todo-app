import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Header />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
