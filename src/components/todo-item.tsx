// Core
import { FC, memo } from 'react'
import { useAppDispatch } from '@/hooks/redux-hooks'

// UI
import { Checkbox } from './ui/checkbox'
import { TodoItem } from '@/types/types'
import { todoToggled, todoDeleted } from '@/features/todos-slice'
import { Button } from './ui/button'
import { X } from 'lucide-react'

const TodoCard: FC<TodoItem> = memo(({ id, name, completed }) => {
  const dispatch = useAppDispatch()

  const toggleCompleted = (): void => {
    dispatch(todoToggled(id))
  }

  const handleDelete = (): void => {
    dispatch(todoDeleted(id))
  }

  return (
    <li className="flex w-full items-center justify-between gap-2">
      <label
        className="group/label flex max-w-[calc(100%_-_2.5rem)]
        grow cursor-pointer items-center
        gap-2 py-2"
      >
        <Checkbox
          checked={completed}
          onCheckedChange={toggleCompleted}
          className="shrink-0 opacity-70
          transition-opacity group-hover/label:opacity-85"
        />
        <span
          className={`overflow-hidden text-ellipsis 
          text-left text-sm ${completed ? 'line-through opacity-70' : ''}`}
        >
          {name}
        </span>
      </label>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0"
        onClick={handleDelete}
      >
        <X size={14} strokeWidth={1.75} className="opacity-70" />
      </Button>
    </li>
  )
})

export default TodoCard
