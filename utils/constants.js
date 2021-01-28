import { gql } from '@apollo/client'

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

export const SINGLE_POST_QUERY = gql`
  query($postSlug: String!){
    post(postSlug: $postSlug){${postFields}}
  }
`
