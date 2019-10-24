import React, { Component } from 'react';
import './TodoItem/TodoItem.css';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove, onEdit } = this.props;

        const todoList = todos.map(({ id, text, checked }) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                onEdit={onEdit}
                key={id}
            >
            </TodoItem>
        )
        );

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

        if (todos !== '') {
            return (
                <div>
                    {todoList}
                </div>
            );
        } else if (todoList === '') {
            return (
                <div>
                    no
                </div>
            );
        }

    }
}

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove, onEdit } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>

                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }>delete</div>

                <div className="edit" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onEdit(id)
                }
                }>fix</div>

                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">complete</div>)
                }
            </div >
        );
    }
}


export default TodoItemList;