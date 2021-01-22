import { gql } from '@apollo/client'
import { lessonFields } from './fields'

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
