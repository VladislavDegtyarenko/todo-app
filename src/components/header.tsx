import { FC } from 'react'

import ThemeSelect from './theme-select'
import { CircleCheckBig } from 'lucide-react'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between border-b-[1px] py-2">
      <h1 className="flex items-center gap-2 text-lg font-semibold">
        <CircleCheckBig size={20} strokeWidth={2.25} />
        Todo App
      </h1>
      <div>
        <ThemeSelect />
      </div>
    </header>
  )
}

export default Header
