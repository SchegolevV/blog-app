type TLocalUser = {
  email: string
  token: string
  username: string
  image?: string
}

export const setLocalUser = (user: TLocalUser) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}
