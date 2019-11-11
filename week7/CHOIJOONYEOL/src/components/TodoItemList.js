import React, { Component } from 'react';
import './TodoItem/TodoItem.css';
// import { Button } from 'react-bootstrap'
// import Dialog from 'react-bootstrap-dialog'
// import ButtonDelete from './ButtonDelete';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {

        const { todos, onToggle, onRemove, onEdit, onCheck } = this.props;

        const todoList =
            todos.map(({ id, todo, checked }) => (
                <TodoItem
                    id={id}
                    todo={todo}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onEdit={onEdit}
                    onCheck={onCheck}
                    key={id}
                    todos={todos}
                />
            ));

        // const todoList = todos.map(
        //     (todo) => (
        //       <TodoItem
        //         {...todo}
        //         onToggle={onToggle}
        //         onRemove={onRemove}
        //         key={todo.id}
        //       />
        //     )
        //   );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        //const { text, checked, id, onCheck, onEdit } = this.props;
        const { checked, id, onCheck, onEdit, onRemove, todo } = this.props;

        return (
            <div className="todo-item">

                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{todo}</div>
                </div>

                {
                    checked && (<div className="check-mark"> Complete </div>)
                }

                <div className="check" onClick={() => onCheck(id)}> Check </div>

                <div className="edit" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onEdit(id)
                }
                }> Edit </div>

                <div className="remove" onClick=
                    {() => {
                        if (window.confirm('You want to delete this list?')) onRemove(id)
                    }}> Delete
                </div>
            </div >
        );
    }
}


export default TodoItemList;