export const getToken = (): string | null => {
  const user = localStorage.getItem('token')
  console.log(user)
  return user ? JSON.parse(user) : null
}
