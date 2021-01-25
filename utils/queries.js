import { gql } from '@apollo/client'
import { courseFields, lessonFields, postFields } from './fields'

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
    page
    objects{${postFields}}
  }
}
`

export const ALL_COURSES_QUERY = gql`
  query($page:Int){
    courses(page: $page){
      page
      hasNext
      hasPrev
      pages
      page
      objects {${courseFields}}
    }
  }
`
