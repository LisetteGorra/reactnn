import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="item" key={todo.id}>
                <span onClick={() => {deleteTodo(id)}}>{todo.content}</span>
                </div>)
        })
        ) : ( 
            <p>You have nothing left todo</p>
    ) 
    return(
        <div className="todos collection">
             {todoList}
    
        </div>

    )
}

export default Todos