import { gql } from '@apollo/client'
import {
  courseFields,
  languageFields,
  lessonFields,
  postFields,
  quizFields,
  userAnswerFields,
  userFields,
} from './fields'

export const CHECK_ENROLLEMENT_QUERY = gql`
  query($courseId: Int!) {
    checkEnrollement(courseId: $courseId)
  }
`

export const SINGLE_LESSON_QUERY = gql`
query($lessonSlug: String!){
  lesson(lessonSlug: $lessonSlug){${lessonFields}}
}
`

export const ALL_POSTS_QUERY = gql`
  query($page:Int){
    posts(page: $page){
      page
      hasNext
      hasPrev
      pages
      objects{${postFields}}
    }
  }
`

export const ALL_COURSES_QUERY = gql`
query($page: Int) {
  courses(page: $page) {
    page
    hasNext
    hasPrev
    pages
    objects {${courseFields}}
  }
}
`

export const SINGLE_QUIZ_QUERY = gql`
  query ($chapterSlug: String!){
    quiz (chapterSlug: $chapterSlug) {${quizFields}}
  }
`

export const USER_ANSWERS_QUERY = gql`
  query ($chapterSlug: String!){
    userAnswer (chapterSlug: $chapterSlug) {${userAnswerFields}}
  }
`

export const ALL_USER_QUIZZES = gql`
  query dashboardStats {
    me {${userFields}}
    allQuizzesUser {${userAnswerFields}}
  }
`

export const ALL_LANGUAGES_QUERY = gql`
  query {
    languages {${languageFields}}
  }
`
