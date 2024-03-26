// Core
import { FC } from 'react'
import { FilterOption } from '@/types/types'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'

// UI
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { filterChanged, getCurrentFilter } from '@/features/todos-slice'

const TodoFilter: FC = () => {
  const currentFilter = useAppSelector(getCurrentFilter)
  const dispatch = useAppDispatch()

  const handleChangeFilter = (value: string): void => {
    // We could pass value indeed,
    // but TS says 'string is not assignable to FilterOption'.
    // So we need a way to convert a string type to FilterOption
    const filterOption = Object.values(FilterOption).find(
      (option) => option === value,
    ) as FilterOption

    if (filterOption) {
      dispatch(filterChanged(filterOption))
    }
  }

  return (
    <Tabs
      defaultValue={currentFilter}
      className="ml-auto mr-auto w-80 max-w-full"
      onValueChange={handleChangeFilter}
    >
      <TabsList className="w-full">
        {Object.entries(FilterOption).map(([optionString, optionValue]) => {
          return (
            <TabsTrigger
              value={optionValue}
              key={optionValue}
              className="w-full"
            >
              {optionString}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}

export default TodoFilter
