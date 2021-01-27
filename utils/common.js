import { getToken } from './auth'
import { AUTH_TOKEN } from './constants'

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
  return items.map(({ price }) => price).reduce((sum, i) => sum + i)
}

export const reloadToken = () => {
  return getToken()
}
