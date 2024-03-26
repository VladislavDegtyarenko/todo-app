// Core
import { useAppSelector } from '@/hooks/redux-hooks'

// UI
import TodoCard from './todo-item'
import { getCurrentFilter, getFilteredTodos } from '@/features/todos-slice'
import { FC } from 'react'

const TodoList: FC = () => {
  const filteredTodos = useAppSelector(getFilteredTodos)
  const currentFilter = useAppSelector(getCurrentFilter)

  const todosHeading =
    filteredTodos.length > 0
      ? `${currentFilter} todos: ${filteredTodos.length}`
      : `No ${currentFilter} todos`

  return (
    <div className="grid w-full grid-cols-[100%] grid-rows-[auto_1fr] gap-1">
      <div className="text-left text-xl capitalize">{todosHeading}</div>
      <ul className="flex w-full flex-col overflow-hidden">
        {filteredTodos.map(({ name, completed, id }) => {
          return <TodoCard key={id} id={id} name={name} completed={completed} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
