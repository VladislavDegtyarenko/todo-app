import { StickyNote } from 'lucide-react'
import { FC } from 'react'

const NoTodos: FC = () => {
  return (
    <div className="grow-1 flex flex-col items-center justify-center">
      <StickyNote size={32} strokeWidth={1} className="mb-2" />
      <h2 className="text-xl font-bold">No todos.</h2>
      <p className="opacity-70">Start adding a new one...</p>
    </div>
  )
}

export default NoTodos
