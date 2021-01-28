import { gql } from '@apollo/client'
import {
  chapterFields,
  courseFields,
  errorFields,
  lessonFields,
  userAnswerFields,
  userFields,
} from './fields'

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

export const CREATE_COURSE = gql`
  mutation($title: String!, $description: String, $price: Decimal, $level: String!, $thumbnail: String, $language: String!) {
    createCourse(title: $title, description: $description, price: $price, level: $level, thumbnail: $thumbnail, language: $language) {
      course{${courseFields}}
    }
  }
`

export const UPDATE_COURSE = gql`
  mutation($courseId: Int!, $title: String, $description: String, $price: Decimal, $level: String!, $thumbnail: String, $language: String!) {
    updateCourse(courseId: $courseId, title: $title, description: $description, price: $price, level: $level, thumbnail: $thumbnail, language: $language) {
      course{${courseFields}}
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
  mutation($orderItemId: Int) {
    removeOrderItem(orderItemId: $orderItemId) {
      orderItem {
        id
      }
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation($firstName: String, $lastName: String, $phone: String, $address: String, $bio: String) {
    updateUser(firstName: $firstName, lastName: $lastName, phone: $phone, address :$address, bio: $bio) {
      user {${userFields}}
    }
  }
`

export const UPDATE_AVATAR = gql`
  mutation($file: String) {
    updateAvatar(file: $file) {
      success
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

export const CREATE_CHAPTER = gql`
  mutation($courseSlug: String!, $name: String!) {
    createChapter(courseSlug: $courseSlug, name: $name) {
      chapter {${chapterFields}}
    }
  }
`

export const CREATE_LESSON = gql`
  mutation($courseSlug: String!, $chapterSlug: String!, $title: String!, $duration: Int, $platform: String) {
    createLesson(courseSlug: $courseSlug, chapterSlug: $chapterSlug, title: $title, duration: $duration, platform: $platform) {
      lesson {${lessonFields}}
    }
  }
`
