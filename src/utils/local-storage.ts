export const getLocalStorage = <TType>(
  key: string,
  defaultValue: TType,
): TType => {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData) return JSON.parse(serializedData)
  } catch (error) {
    console.warn(error)
  }

  return defaultValue
}

export const setLocalStorage = <TType>(key: string, value: TType): void => {
  try {
    const serializedData = JSON.stringify(value)
    localStorage.setItem(key, serializedData)
  } catch (error) {
    console.warn(error)
  }
}
