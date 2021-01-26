import { gql } from '@apollo/client'
import { courseFields, userAnswerFields } from './fields'

export const SUBSCRIBE_USER_TO_COURSE = gql`
mutation($courseId: Int!) {
  subscribeUserToCourse(courseId: $courseId) {
      course{${courseFields}}
    }
  }
`

export const SUBSCRIBE_USER_TO_NEWSLETTER = gql`
  mutation($email: String) {
    subscribeToNewsletter(email: $email) {
      subscribed
    }
  }
`

export const CREATE_USER_ANSWER = gql`
  mutation($quizId: Int!, $questionId: Int!, $answerId: Int!) {
    createUserAnswer(quizId: $quizId, questionId: $questionId, answerId: $answerId) {
      userAnswer{${userAnswerFields}}
    }
  }
`

export const ADD_COURSE_TO_CART = gql`
  mutation($courseId: Int, $orderId: Int, $quantity: Int) {
    createOrderItem(
      courseId: $courseId
      orderId: $orderId
      quantity: $quantity
    ) {
      orderItem {
        id
        price
        quantity
        order {
          id
          items {
            id
            quantity
          }
        }
      }
    }
  }
`

export const CREATE_ORDER = gql`
  mutation {
    createOrder {
      order {
        id
        items {
          id
        }
      }
    }
  }
`

export const REMOVE_COURSE_FROM_CART = gql`
  mutation($courseId: Int) {
    removeFromCart(courseId: $courseId) {
      cart {
        quantity
        course {
          id
        }
      }
    }
  }
`
