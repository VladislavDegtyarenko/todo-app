// eslint-disable no-unused-vars

import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { TodoItem, FilterOption } from '@/types/types'
import { RootState } from '@/store/store'
import { getLocalStorage } from '@/utils/local-storage'

interface TodosState {
  todos: TodoItem[]
  filter: FilterOption
}

const DEFAULT_STATE = {
  'todos': [],
  'filter': FilterOption.All,
}

const initialState: TodosState = getLocalStorage<TodosState>(
  'todos',
  DEFAULT_STATE,
)

const todosSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    'todoAdded': {
      'reducer': (state, action: PayloadAction<TodoItem>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state.todos.push(action.payload)
      },
      'prepare': (name: string) => {
        return {
          'payload': {
            'id': nanoid(8),
            name,
            'completed': false,
          },
        }
      },
    },
    'todoToggled': (state, action: PayloadAction<TodoItem['id']>) => {
      const todoItem = state.todos.find((todo) => todo.id === action.payload)

      if (todoItem) {
        todoItem.completed = !todoItem.completed
      }
    },
    'todoDeleted': (state, action: PayloadAction<TodoItem['id']>) => {
      const todos = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = todos
    },
    'filterChanged': (state, action: PayloadAction<FilterOption>) => {
      state.filter = action.payload
    },
  },
})

const selectTodos = (state: RootState): TodoItem[] => state.todos.todos
const selectFilter = (state: RootState): FilterOption => state.todos.filter

export const getFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case FilterOption.Completed: {
        return todos.filter((todo) => todo.completed)
      }
      case FilterOption.Current: {
        return todos.filter((todo) => !todo.completed)
      }
      default: {
        return todos
      }
    }
  },
)

export const getCurrentFilter = (state: RootState): FilterOption => {
  return state.todos.filter
}

export const hasTodos = (state: RootState): boolean => {
  return state.todos.todos.length > 0
}

export const { todoAdded, todoToggled, todoDeleted, filterChanged } =
  todosSlice.actions

export default todosSlice.reducer
