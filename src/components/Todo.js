import React from 'react';
import './Todo.css'

const Todo = ({todo,toggleTodo, deleteTodo}) => {

    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    function handleDeleteTodo(id){
        deleteTodo(todo.id)
    }


    return (
        <div>
            <h3 className="todo" style={{
                textDecoration: (todo.complete && 'line-through'),
                color:(todo.complete && 'grey')
            }}>
                <input type="checkbox"  checked={todo.complete} onChange={handleTodoClick}  />
                {todo.name}
                <button type="button" className="btn btn-warning btn-sm" onClick={handleDeleteTodo}>Delete</button>
            </h3>
        </div>
    );
}

export default Todo;
