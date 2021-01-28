import { getToken } from './auth'

export const textTruncate = (str, length, ending) => {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = '...'
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}

export const totalSum = (items) => {
  return items
    .map(({ price }) => price)
    .reduce((sum, i) => parseInt(sum) + parseInt(i), 0)
}

export const reloadToken = () => {
  return getToken()
}

export const removeTags = (str) => {
  if (str === null || str === '') return false
  else str = str.toString()

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, '')
}

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
