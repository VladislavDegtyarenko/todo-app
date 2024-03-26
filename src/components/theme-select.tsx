import { Sun, Moon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { getTheme, themeChanged } from '@/features/theme-slice'
import { ThemeOption } from '@/types/types'
import { FC, useEffect } from 'react'

const LightIcon = <Sun size={20} />
const DarkIcon = <Moon size={20} />
/* prettier-ignore */
const themeIcons = {
  'light': LightIcon,
  'dark': DarkIcon,
  'system': window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DarkIcon
    : LightIcon,
}

const ThemeSelect: FC = () => {
  const theme = useAppSelector(getTheme)
  const dispatch = useAppDispatch()

  const handleThemeChange = (selectedTheme: ThemeOption): void => {
    // We could pass value indeed,
    // but TS says 'string is not assignable to ThemeOption'.
    // So we need a way to convert a string type to ThemeOption
    const themeOption = Object.values(ThemeOption).find(
      (option) => option === selectedTheme,
    ) as ThemeOption

    if (themeOption) {
      dispatch(themeChanged(selectedTheme))
    }
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')

    if (theme === 'system') {
      darkModePreference.matches
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')

      const handleSystemThemeChange = (event: MediaQueryListEvent): void => {
        event.matches
          ? document.body.classList.add('dark')
          : document.body.classList.remove('dark')
      }

      darkModePreference.addEventListener('change', handleSystemThemeChange)

      return () => {
        darkModePreference.removeEventListener(
          'change',
          handleSystemThemeChange,
        )
      }
    }

    if (theme === 'dark') {
      document.body.classList.add('dark')
    }

    if (theme === 'light') {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <Select defaultValue={theme} onValueChange={handleThemeChange}>
      <SelectTrigger
        className="h-8 w-16 items-center
        border-none py-0 text-xs
      hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        {themeIcons[theme]}
      </SelectTrigger>
      <SelectContent>
        {Object.entries(ThemeOption).map(([themeString, themeOption]) => {
          return (
            <SelectItem
              key={themeOption}
              value={themeOption}
              className="text-xs"
            >
              {themeString}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export default ThemeSelect
