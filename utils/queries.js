import { gql } from '@apollo/client'

export const CHECK_ENROLLEMENT_QUERY = gql`
  query($courseId: Int!) {
    checkEnrollement(courseId: $courseId)
  }
`
