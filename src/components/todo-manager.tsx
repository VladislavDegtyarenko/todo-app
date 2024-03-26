// Core
import { useAppSelector } from '../hooks/redux-hooks'
import { hasTodos } from '../features/todos-slice'

// UI
import TodoFilter from './todo-filter'
import TodoList from './todo-list'
import NoTodos from './no-todos'
import { FC } from 'react'

const TodoManager: FC = () => {
  const hasAnyTodos = useAppSelector(hasTodos)

  if (hasAnyTodos) {
    return (
      <div className="grid w-full grid-cols-[100%] grid-rows-[auto_1fr] gap-4">
        <TodoFilter />
        <TodoList />
      </div>
    )
  }

  return <NoTodos />
}

export default TodoManager
