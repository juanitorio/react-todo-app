import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h3>Todo List</h3>
            <p className="nav">
                <Link style={linkStyle} to="/">
                    Home
                </Link>{" "}
                |{" "}
                <Link style={linkStyle} to="/about">
                    About
                </Link>
            </p>
        </header>
    );
}

const linkStyle = {
    textDecoration: "none",
    color: "#fff"
};
