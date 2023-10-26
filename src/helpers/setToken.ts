export const setToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}
