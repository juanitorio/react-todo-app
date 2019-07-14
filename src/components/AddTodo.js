import React, { Component } from "react";

export default class AddTodo extends Component {
    state = {
        value: ""
    };

    componentDidMount() {
        this.input.focus();
    }

    onValueChange = e => {
        const newValue = e.target.value;
        this.setState({
            value: newValue
        });
    };

    formSubmit = e => {
        e.preventDefault();
        this.props.formSubmit(this.state.value);
        this.setState({
            value: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input
                    ref={input => (this.input = input)}
                    type="text"
                    placeholder="Add Todo..."
                    value={this.state.value}
                    onChange={this.onValueChange}
                />
                <input type="submit" value="Submit" hidden />
            </form>
        );
    }
}
