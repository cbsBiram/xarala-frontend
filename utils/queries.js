import { gql } from '@apollo/client'
import {
  courseFields,
  lessonFields,
  postFields,
  quizFields,
  userAnswerFields,
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
