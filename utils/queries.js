import { gql } from '@apollo/client'
import {
  chapterFields,
  courseFields,
  languageFields,
  lessonFields,
  orderFields,
  postFields,
  quizFields,
  tagFields,
  userAnswerFields,
  userFields,
} from './fields'

export const ALL_STUDENTS_QUERY = gql`
  query($page: Int) {
    students(page: $page) {
      page
      hasNext
      hasPrev
      pages
      objects{${userFields}}
    }
  }
`

export const ALL_TEACHERS_QUERY = gql`
  query($page: Int) {
    teachers(page: $page) {
      page
      hasNext
      hasPrev
      pages
      objects{${userFields}}
    }
  }
`

export const ALL_AUTHORS_QUERY = gql`
  query($page: Int) {
    authors(page: $page) {
      page
      hasNext
      hasPrev
      pages
      objects{${userFields}}
    }
  }
`

export const ALL_USERS_QUERY = gql`
  query {
    users {
      studentsCount
      teachersCount
      authorsCount
      salesFigures
    }
  }
`

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
  allCourses(page: $page) {
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

export const ORDER_QUERY = gql`
  query($orderId: Int){
    order(orderId: $orderId){${orderFields}}
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

export const ALL_CHAPTERS_COURSE = gql`
  query($courseSlug: String!) {
    chaptersCourse(courseSlug: $courseSlug) {${chapterFields}}
  }
`

export const ALL_CHAPTERS_USER_QUERY = gql`
  query {
    chaptersUser {${chapterFields}}
  }
`

export const SINGLE_CHAPTER_QUERY = gql`
  query($courseSlug: String!, $chapterSlug: String!) {
    chapterCourse(courseSlug: $courseSlug, chapterSlug: $chapterSlug) {${chapterFields}}
  }
`

export const ALL_LESSONS_CHAPTER = gql`
  query($courseSlug: String!, $chapterSlug: String!) {
    lessonsChapter(courseSlug: $courseSlug, chapterSlug: $chapterSlug) {${lessonFields}}
  }
`

export const SINGLE_LESSON_CHAPTER = gql`
  query($courseSlug: String!, $chapterSlug: String!, $lessonSlug: String!) {
    lessonChapter(courseSlug: $courseSlug, chapterSlug: $chapterSlug, lessonSlug: $lessonSlug) {${lessonFields}}
  }
`

export const TAGS_QUERY = gql`
query{
  tags{${tagFields}}
}
`

export const POST_AUTHORS = gql`
query{
  authors{
    ${userFields}
  }
}
`
