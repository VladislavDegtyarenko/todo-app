// Core
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useState } from 'react'

// UI
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { todoAdded } from '@/features/todos-slice'

//
const maxChars = 80
const maxCharsMessage = `The task name is too long.
${maxChars} characters max.`

const AddTodoForm: FC = () => {
  const [inputText, setInputText] = useState('')
  const [inputError, setInputError] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value)
  }

  const memoizedInputError = useMemo(() => {
    if (inputText.length > maxChars) {
      return maxCharsMessage
    }
    return ''
  }, [inputText])

  useEffect(() => {
    setInputError(memoizedInputError)
  }, [memoizedInputError])

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (inputText.length > 0 && inputText.length <= maxChars) {
      dispatch(todoAdded(inputText))
      setInputText('')
    }
  }

  /* prettier-ignore */
  return (
    <form className="relative flex gap-4 pb-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Task name"
        className="font-bold"
        value={inputText}
        onChange={handleChange}
      />
      <Button disabled={inputText.length === 0 || inputText.length > maxChars}>
        Add Todo
      </Button>

      {inputError && <span
        className="text-xs absolute bottom-full mb-1 ml-2
        text-red-600 dark:text-red-400"
      >
        {inputError}
      </span>
      }
    </form>
  )
}

export default AddTodoForm
