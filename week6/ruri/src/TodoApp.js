import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate';
import Form from './components/Form/Form';
import TodoItemList from './components/TodoItemList';
import axios from 'axios';
// import ButtonDelete from './components/ButtonDelete';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: [],
      editMode: false,
    };

    this.getTodos();
  }

  componentDidMount() {
    console.log(this.state.todos);
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    if (this.state.input === '') {
      alert('write something');
      return false;
    }

    this.postTodo();
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleCheck = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.putTodo(id, { checked: !selected.checked });
  };

  handleCheckStar = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.putTodo(id, { kind: 1 - selected.kind }); // 임시
  };

  handleChangeDisplayOrder = (id, kind) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.putTodo(id, { display_order: selected.display_order + (kind === 'up' ? 1 : -1) }); // 임시
  };

  handleEdit = id => {
    this.setState({ editMode: true });
  };

  handleRemove = id => {
    this.deleteTodo(id);
  };

  handleConfirm = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  };

  getTodos = () => {
    axios
      .get('http://3.115.63.100:3000/api/v1/todo', {
        headers: { 'Content-Type': 'application/json', Authorization: 'Token FOO' },
      })
      .then(res =>
        this.setState({
          todos: res.data,
        }),
      );
  };

  postTodo = () => {
    axios
      .post(
        'http://3.115.63.100:3000/api/v1/todo',
        {
          todo: {
            text: this.state.input,
            date: '2019-11-11',
            display_order: this.state.todos.length,
            kind: 0,
          },
        },
        { headers: { 'Content-Type': 'application/json', Authorization: 'Token FOO' } },
      )
      .then(res => {
        const newPost = res.data;

        this.setState({
          input: '',
          todos: this.state.todos.concat({
            id: newPost.id,
            text: newPost.text,
            checked: newPost.checked,
            display_order: newPost.display_order,
            kind: newPost.kind,
          }),
        });
      });
  };

  putTodo = (id, data) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);

    axios
      .put(
        'http://3.115.63.100:3000/api/v1/todo/' + id,
        { todo: data },
        { headers: { 'Content-Type': 'application/json', Authorization: 'Token FOO' } },
      )
      .then(res => {
        this.getTodos();
      });
  };

  deleteTodo = id => {
    axios
      .delete('http://3.115.63.100:3000/api/v1/todo/' + id, {
        headers: { 'Content-Type': 'application/json', Authorization: 'Token FOO' },
      })
      .then(res => {
        this.getTodos();
      });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleCheck,
      handleCheckStar,
      handleChangeDisplayOrder,
      handleRemove,
      handleEdit,
      handleConfirm,
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          ></Form>
        }
      >
        <TodoItemList
          todos={todos}
          onCheck={handleCheck}
          onCheckStar={handleCheckStar}
          onChangeDisplayOrder={handleChangeDisplayOrder}
          onRemove={handleRemove}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
        ></TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default TodoApp;
