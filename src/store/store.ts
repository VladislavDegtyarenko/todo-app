import { configureStore } from '@reduxjs/toolkit'
import { setLocalStorage } from '@/utils/local-storage'

// Reducers
import todosReducer from '../features/todos-slice'
import themeReducer from '../features/theme-slice'

const store = configureStore({
  'reducer': {
    'todos': todosReducer,
    'theme': themeReducer,
  },
})

store.subscribe(() => {
  setLocalStorage('todos', store.getState().todos)
  setLocalStorage('theme', store.getState().theme)
})

// Infer the `RootState` and `AppDispatch` types
// from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type:
// {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
