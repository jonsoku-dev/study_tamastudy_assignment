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

        const { todos, onToggle, onRemove, onEdit, onEditSave, onEditCancel, onCheck } = this.props;

        const todoList =
            todos.map(({ id, todo, checked }) => (
                <TodoItem
                    id={id}
                    todo={todo}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onEdit={onEdit}
                    onEditCancel={onEditCancel}
                    onEditSave={onEditSave}
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

    constructor(props) {
        super(props);
        this.state = { isEditing: false }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    onEdit1 = (id) => {
        this.setState({ isEditing: true });
        // alert("2");
    }

    render() {

        //const { text, checked, id, onCheck, onEdit } = this.props;
        const { checked, id, onCheck, onEdit, onRemove, todo } = this.props;

        const viewStyle = {};
        const editStyle = {};

        if (this.state.isEditing) {
            viewStyle.display = 'none';
        }
        else {
            editStyle.display = 'none';
        }

        return (
            <div>

                <div className="todo-item" style={viewStyle}>
                    <div className={`todo-text ${checked && 'checked'}`}>
                        <div>{todo}</div>
                    </div>
                    {checked && (<div className="check-mark"> Complete </div>)}
                    <div className="check" onClick={() => onCheck(id)}> Check </div>
                    <div className="edit" onClick={() => onEdit(id)}> Edit </div>
                    {/* <div className="edit" onClick={() => onEdit()}> Edit </div> */}
                    {/* <div className="edit" onClick={this.onEdit1}> Edit </div> */}
                    <div className="remove" onClick=
                        {() => {
                            if (window.confirm('You want to delete this list?')) onRemove(id)
                        }}> Delete
                    </div>
                </div>

                <div style={editStyle}>
                    <input type="Text"
                        // style={editStyle}
                        defaultValue={todo}
                    />
                </div>

            </div>
        );
    }
}


export default TodoItemList;