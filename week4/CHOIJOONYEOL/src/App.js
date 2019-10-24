import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate';
import Form from './components/Form/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 0
  state = {
    input: '',
    todos: [],
    edit: null
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;

    if (this.state.input === '') {
      alert('write something')
      return false;
    }

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    // 선택한 객체
    const selected = todos[index];
    // 배열을 복사
    const nextTodos = [...todos];
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleEdit = (id) => {
    const { todos } = this.state;
    // this.setState({ edit: todos });
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove, handleEdit } = this;
    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}>
        </Form>}>
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          onEdit={handleEdit}>

        </TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default App;