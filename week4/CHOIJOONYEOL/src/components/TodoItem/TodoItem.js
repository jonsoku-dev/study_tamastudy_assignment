// import React, { Component } from 'react';
// import './TodoItem.css';

// class TodoItem extends Component {
//     render() {
//         const { text, checked, id, onToggle, onRemove, onEdit } = this.props;

//         return (
//             <div className="todo-item" onClick={() => onToggle(id)}>

//                 <div className="remove" onClick={(e) => {
//                     e.stopPropagation(); // onToggle 이 실행되지 않도록 함
//                     onRemove(id)
//                 }
//                 }>&times;</div>

//                 <div className="edit" onClick={(e) => {
//                     e.stopPropagation(); // onToggle 이 실행되지 않도록 함
//                     onEdit(id)
//                 }
//                 }>&times;</div>

//                 <div className={`todo-text ${checked && 'checked'}`}>
//                     <div>{text}</div>
//                 </div>

//                 {
//                     checked && (<div className="check-mark">✓</div>)
//                 }
//             </div>

//         );
//     }
// }

// export default TodoItem;