// eslint-disable-next-line no-shadow
export enum FilterOption {
  All = 'all',
  Current = 'current',
  Completed = 'completed',
}

export type TodoItem = {
  id: string
  name: string
  completed: boolean
}

// eslint-disable-next-line no-shadow
export enum ThemeOption {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
