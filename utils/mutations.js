import { gql } from '@apollo/client'
import {
  chapterFields,
  courseFields,
  errorFields,
  lessonFields,
  postFields,
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
  mutation($title: String!, $description: String, $price: Decimal, $level: String!, $file: String, $languageName: String!,) {
    createCourse(title: $title, description: $description, price: $price, level: $level, file: $file, languageName: $languageName) {
      course{${courseFields}}
    }
  }
`

export const UPDATE_COURSE = gql`
  mutation($courseId: Int!, $title: String, $description: String, $price: Decimal, $level: String, $file: String, $languageName: String) {
    updateCourse(courseId: $courseId, title: $title, description: $description, price: $price, level: $level, file: $file, languageName: $languageName) {
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
      isDeleted
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

export const UPDATE_CHAPTER = gql`
  mutation($chapterId: Int!, $name: String, $chapterNumber: Int) {
    updateChapter(chapterId: $chapterId, name: $name, chapterNumber: $chapterNumber) {
      chapter{${chapterFields}}
    }
  }
`

export const CREATE_LESSON = gql`
  mutation($courseSlug: String!, $chapterSlug: String!, $title: String!, $videoId: String!, $duration: Int, $platform: String!) {
    createLesson(courseSlug: $courseSlug, chapterSlug: $chapterSlug, title: $title, videoId: $videoId, duration: $duration, platform: $platform) {
      lesson {${lessonFields}}
    }
  }
`

export const UPDATE_LESSON = gql`
  mutation($lessonId: Int!, $title: String, $videoId: String, $duration: Int, $platform: String, $lectureNumber: Int!) {
    updateLesson(lessonId: $lessonId, title: $title, videoId: $videoId, duration: $duration, platform: $platform, lectureNumber: $lectureNumber) {
      lesson{${lessonFields}}
    }
  }
`

export const VALIDATE_ORDER = gql`
  mutation($orderId: Int, $courseId: Int) {
    validateOrder(courseId: $courseId, orderId: $orderId) {
      isSuccess
    }
  }
`

export const PASSWORD_RESET_EMAIL = gql`
mutation($email: String!){
  sendPasswordResetEmail(email: $email){
    user{${userFields}}
  }
}
`

export const PASSWORD_RESET_CONFIRM = gql`
mutation($email: String!, $code: String!, $newPassword: String!){
  resetPassword(email: $email, code: $code, newPassword: $newPassword){
    user{${userFields}}
  }
}
`

export const CONTACT_US = gql`
  mutation(
    $email: String
    $message: String
    $phone: String
    $fullName: String
  ) {
    contactUs(
      email: $email
      message: $message
      phone: $phone
      fullName: $fullName
    ) {
      contact {
        id
        fullName
        email
        phone
      }
    }
  }
`

export const CREATE_POST = gql`
  mutation(
    $title: String,
    $content: String,
    $image:String,
    $description: String){
    createPost(
      title: $title,
      content: $content,
      image: $image,
      description: $description){
      post{${postFields}}
    }
  }
`
