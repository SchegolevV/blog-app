import { format } from 'date-fns'

const formatDate = (date: string) => {
  const parsed = Date.parse(date)
  return format(parsed, 'MMMM dd, yyyy')
}

export default formatDate
