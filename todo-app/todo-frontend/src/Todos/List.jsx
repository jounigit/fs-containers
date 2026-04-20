import { Fragment } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Fragment key={todo._id}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          {index < todos.length - 1 && <hr />}
        </Fragment>
      ))}
    </>
  )
}

export default TodoList
