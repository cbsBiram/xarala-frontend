import { gql } from '@apollo/client'
import { courseFields } from './fields'

export function getFromMediaUrl(url) {
  return process.env.MEDIA_URL + url
}

export const All_Courses_Query = gql`
  query {
    courses {${courseFields}}
  }
`

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`

export const ME_QUERY = gql`
  {
    me {
      id
      email
      firstName
      lastName
    }
  }
`
