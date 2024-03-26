// Core
import { FC } from 'react'

// UI
import AddTodoForm from './components/add-todo-form'
import TodoManager from './components/todo-manager'

// Global styles
import './App.css'
import Header from './components/header'

const App: FC = () => {
  return (
    <>
      <Header />
      <TodoManager />
      <AddTodoForm />
    </>
  )
}

export default App
