import { RootState } from '@/store/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ThemeOption } from '@/types/types'
import { getLocalStorage } from '@/utils/local-storage'

const DEFAULT_THEME = { 'theme': ThemeOption.System }

type ThemeState = {
  theme: ThemeOption
}

const initialState: ThemeState = getLocalStorage<ThemeState>(
  'theme',
  DEFAULT_THEME,
)

const themeSlice = createSlice({
  'name': 'theme',
  initialState,
  'reducers': {
    'themeChanged': (state, action: PayloadAction<ThemeOption>) => {
      state.theme = action.payload
    },
  },
})

export const getTheme = (state: RootState): ThemeOption => state.theme.theme

export const { themeChanged } = themeSlice.actions

export default themeSlice.reducer
