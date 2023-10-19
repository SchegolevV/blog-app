type TTextTrim = (text: string | undefined, param: number) => string

export const textTrim: TTextTrim = (text, limit) => {
  if (!text) return ''

  text = text.trim()
  if (text.length <= limit) return text

  text = text.slice(0, limit)
  const lastSpace = text.lastIndexOf(' ')

  if (lastSpace > 0) {
    text = text.substring(0, lastSpace)
  }
  return text
}
