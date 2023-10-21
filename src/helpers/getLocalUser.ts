type TGetStorageItem = () => {
  email: string
  token: string
  username: string
  image?: string
}

export const getLocalUser: TGetStorageItem = () => {
  const user = localStorage.getItem('currentUser') || JSON.stringify('')
  return JSON.parse(user)
}
