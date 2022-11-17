export function useStorage(storageType: Storage = localStorage) {
  function getItem(key: string) {
    try {
      return JSON.parse(storageType.getItem(key) || '{}')
    }
    catch (error: any) {
      console.error('getItem ~ catch', error)
    }
  }

  function setItem(key: string, data: any) {
    try {
      storageType.setItem(key, JSON.stringify(data))
    }
    catch (error: any) {
      console.error('setItem ~ catch', error)
    }
  }

  function removeItem(key: string) {
    try {
      storageType.removeItem(key)
    }
    catch (error: any) {
      console.error('removeItem ~ catch', error)
    }
  }

  return { getItem, setItem, removeItem }
}
