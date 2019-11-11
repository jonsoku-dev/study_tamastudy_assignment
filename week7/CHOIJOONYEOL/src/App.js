import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate';
import Form from './components/Form/Form';
import TodoItemList from './components/TodoItemList';
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBKQxMn3yF-VIBxPktesnwi4RJXd599VRA",
  authDomain: "todolistreact-89b8e.firebaseapp.com",
  databaseURL: "https://todolistreact-89b8e.firebaseio.com",
  projectId: "todolistreact-89b8e",
  storageBucket: "todolistreact-89b8e.appspot.com",
  messagingSenderId: "795938726066",
  appId: "1:795938726066:web:9b6ca43bdc050b4ed9e9ab",
  measurementId: "G-GZ437QWX02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
const timestamp = snapshot.get('created_at');

const date = timestamp.toDate(); // JS Date 型が欲しい場合
const seconds = timestamp.seconds; // 秒数が欲しい場合

class App extends Component {

  id = 0
  state = {
    input: '',
    todos: [],
    isEditing: false
  }

  componentDidMount() {
    const todos = [...this.state.todos]
    // const todo = [...this.state.input]
    firestore.collection('todos').get()
      .then(docs => {
        docs.forEach(doc => {
          todos.push({ todo: doc.data().todo, id: doc.id })
        })
        this.setState({ todos })
      })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {

    // const { input, todos } = this.state;
    const todo = this.state.input;

    if (todo === '') {
      alert('write something')
      return false;
    }

    firestore.collection('todos').add({ todo })
      .then(r => {
        // const todos = [...this.state.todos, { todo, id: r.id }];
        const todos = [...this.state.todos, { todo, id: r.id }];
        this.setState({
          todos,
          input: ''
        })
      });

    // const { input, todos } = this.state;

    // if (this.state.input === '') {
    //   alert('write something')
    //   return false;
    // }

    // this.setState({
    //   input: '',
    //   todos: todos.concat({
    //     id: this.id++,
    //     text: input,
    //     checked: false
    //   })
    // });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleCheck = (id) => {
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

  handleEdit = (id) => {
    this.setState({ isEditing: true });
  }

  handleEditCancel = (id) => {
    this.setState({ isEditing: false });
  }

  handleEditSave = (id) => {
    id.preventDefault();


    this.setState({ isEditing: false });
  }


  handleRemove = (id) => {

    firestore.collection('todos').doc(id).delete()
      .then(() => {
        const todos = this.state.todos.filter((todo) => todo.id !== id)
        this.setState({ todos });
      })

    // const { todos } = this.state;
    // this.setState({
    //   todos: todos.filter(todo => todo.id !== id)
    // });
  }

  handleConfirm = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleCheck, handleRemove, handleEdit, handleConfirm } = this;

    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        >
        </Form>}>
        <TodoItemList
          todos={todos}
          onCheck={handleCheck}
          onRemove={handleRemove}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
        >
        </TodoItemList >
      </TodoListTemplate >


    );
  }
}

export default App;