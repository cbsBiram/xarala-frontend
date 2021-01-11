import { gql } from '@apollo/client'
import { courseFields, postFields, userFields } from './fields'

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

export const RESGISTER_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      user{${userFields}}
    }
  }
`

export const ME_QUERY = gql`
  query {
    me {${userFields}}
  }
`

export const ALL_POSTS_QUERY = gql`
  {
    posts {
      ${postFields}
    }
  }
`
