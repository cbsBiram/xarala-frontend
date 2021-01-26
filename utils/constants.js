import { gql } from '@apollo/client'
import cookie from 'js-cookie'
import {
  courseFields,
  postFields,
  userFields,
  userAnswerFields,
  categoryFields,
  errorFields,
} from './fields'

export function getFromMediaUrl(url) {
  return process.env.MEDIA_URL + url
}

export const COURSES_AND_POSTS_QUERY = gql`
  query coursesAndPosts {
    latestCourses {${courseFields}}
    latestPosts {${postFields}}
  }
`

export const DASHBOARD_INFO_QUERY = gql`
  query coursesAndPosts {
    latestCourses {${courseFields}}
    latestPosts {${postFields}}
    me {${userFields}}
    categories{${categoryFields}}
  }
`

export const SINGLE_COURSE_QUERY = gql`
query($courseSlug: String!){
  course(courseSlug: $courseSlug){${courseFields}}
}
`

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`

export const UPDATE_PROFILE_MUTATION = gql`
  mutation($userId: Int!, $firstName: String, $lastName: String, $phone: String, $address: String, $bio: String) {
    updateUser(userId: $userId, firstName: $firstName, lastName: $lastName, phone: $phone, address :$address, bio: $bio) {
      user {${userFields}}
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

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation changePasswordQuery(
      $oldPassword: String!
      $newPassword1: String!
      $newPassword2: String!
    ) {
      changePassword(
        input: {
          oldPassword: $oldPassword
          newPassword1: $newPassword1
          newPassword2: $newPassword2
        }
      ) {
        errors{${errorFields}}
      }
    }
`

export const ME_QUERY = gql`
  query {
    me {${userFields}}
  }
`

export const SINGLE_POST_QUERY = gql`
  query($postSlug: String!){
    post(postSlug: $postSlug){${postFields}}
  }
`

export const AUTH_TOKEN = cookie.get('token')
