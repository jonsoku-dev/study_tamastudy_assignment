import React, { Component } from 'react';
import './TodoItem/TodoItem.css';


class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {

        const { todos, onToggle, onRemove, onEdit, onCheck } = this.props;

        const todoList = todos.map(({ id, text, checked }) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                onEdit={onEdit}
                onCheck={onCheck}
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
        const { text, checked, id, onCheck, onRemove, onEdit } = this.props;

        return (
            <div className="todo-item">

                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
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

                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }> Delete </div>

                {/* 
                <ButtonDelete onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }></ButtonDelete> */}

            </div >
        );
    }
}


export default TodoItemList;