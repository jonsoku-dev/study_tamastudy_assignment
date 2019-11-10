import React, { Component } from 'react';
import './TodoItem/TodoItem.css';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const {
      todos,
      onToggle,
      onRemove,
      onEdit,
      onCheck,
      onCheckStar,
      onChangeDisplayOrder,
    } = this.props;

    const todoList = todos.map(({ id, text, checked, kind, display_order }) => (
      <TodoItem
        id={id}
        text={text}
        kind={kind}
        display_order={display_order}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        onEdit={onEdit}
        onCheck={onCheck}
        onCheckStar={onCheckStar}
        onChangeDisplayOrder={onChangeDisplayOrder}
        key={id}
      ></TodoItem>
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

    return <div>{todoList}</div>;
  }
}

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const {
      text,
      checked,
      id,
      display_order,
      kind,
      onCheck,
      onCheckStar,
      onChangeDisplayOrder,
      onRemove,
      onEdit,
    } = this.props;

    return (
      <div className="todo-item">
        <div onClick={() => onChangeDisplayOrder(id, 'down')}>↑</div>
        <div onClick={() => onChangeDisplayOrder(id, 'up')}>↓</div>
        <div onClick={() => onCheck(id)}>
          <input type="checkbox" checked={checked}></input>
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div onClick={() => onCheckStar(id)}>
          <div>{kind == 1 ? '★' : '☆'}</div>
        </div>

        <div
          className="edit"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onEdit(id);
          }}
        >
          {' '}
          Edit{' '}
        </div>

        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          {' '}
          Delete{' '}
        </div>

        {/* 
                <ButtonDelete onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }></ButtonDelete> */}
      </div>
    );
  }
}

export default TodoItemList;
