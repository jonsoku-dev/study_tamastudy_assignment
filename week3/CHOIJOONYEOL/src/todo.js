import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { todos, name } = this.state;
            this.setState({
                todos: [...todos, name]
            });
        }
    }

    removeTodo = (index) => {
        const { todos } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div>

                <input type="text"
                    onInput={this.onInput}
                    onKeyPress={this.handleKeyPress.bind(this)} />

                <button onClick={this.addTodo}>create</button>

                <ul>
                    {todos.map((todo, index) => <li key={index}>
                        {todo}
                        <button onClick={() => { this.removeTodo(index) }}>delete</button>
                    </li>)}
                </ul>

            </div>
        );
    }
}

export default Todo;