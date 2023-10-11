type TGetStorageItem = (name: string) => {
  email: string
  token: string
  username: string
  image?: string
}

export const getStorageItem: TGetStorageItem = (name) => {
  const item = localStorage.getItem(name) || JSON.stringify('')
  return JSON.parse(item)
}
