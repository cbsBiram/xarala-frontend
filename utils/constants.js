import { gql } from '@apollo/client'
import cookie from 'js-cookie'
import {
  courseFields,
  postFields,
  quizFields,
  userFields,
  userAnswerFields,
  categoryFields,
} from './fields'

export function getFromMediaUrl(url) {
  return process.env.MEDIA_URL + url
}

export const ALL_COURSES_QUERY = gql`
  query {
    courses {${courseFields}}
  }
`

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

export const ALL_POSTS_QUERY = gql`
  query {
    posts {${postFields}}
  }
`

export const SINGLE_POST_QUERY = gql`
  query($postSlug: String!){
    post(postSlug: $postSlug){${postFields}}
  }
`

export const ALL_USER_QUIZZES = gql`
  query dashboardStats {
    me {${userFields}}
    allQuizzesUser {${userAnswerFields}}
  }
`

export const AUTH_TOKEN = cookie.get('token')
