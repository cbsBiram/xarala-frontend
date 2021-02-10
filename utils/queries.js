import { gql } from '@apollo/client'
import {
  categoryFields,
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
  userLogsFields,
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
  query($search: String, $page:Int){
    posts(search: $search, page: $page){
      page
      hasNext
      hasPrev
      pages
      objects{${postFields}}
    }
  }
`

export const ALL_COURSES_QUERY = gql`
  query($search: String, $page: Int) {
    allCourses(search: $search, page: $page) {
      page
      hasNext
      hasPrev
      pages
      objects {
        id
        title
        price
        description
        thumbnail
        slug
        dateCreated
        teacher {
          id
          firstName
          lastName
          email
          phone
        }
      }
    }
  }
`

export const COURSES_BY_SEARCH = gql`
  query($query: String) {
    coursesBySearch(query: $query) {
      id
      title
      price
      description
      thumbnail
      slug
      dateCreated
      teacher {
        id
        firstName
        lastName
        email
        phone
      }
    }
  }
`

export const COURSES_BY_USER = gql`
query ($userId: Int){
  coursesByUser(userId: $userId) {
    ${courseFields}
  }
}
`

export const POSTS_AUTHOR = gql`
query ($userId: Int){
  postsByAuthor(userId: $userId) {
    ${postFields}
  }
}
`

export const POSTS_BY_SEARCH = gql`
  query($query: String) {
    postsBySearch(query: $query) {${postFields}}
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

export const TAG_QUERY = gql`
query ($tagName: String!) {
  tag(name: $tagName) {${tagFields}}
}
`

export const POST_AUTHORS = gql`
query{
  postAuthors{
    ${userFields}
  }
}
`

export const ALL_CATEGORIES = gql`
query{
  categories{
    ${categoryFields}
  }
}
`

export const COURSES_BY_CATEGORY = gql`
query ($categoryName: String){
  coursesByCategory(categoryName: $categoryName) {
    ${courseFields}
  }
}
`

export const POSTS_BY_TAG = gql`
query ($tagName: String!){
  postsByTag(tagName: $tagName) {
    ${postFields}
  }
}
`

export const POST_BY_TAG = gql`
  query($tagName: String!) {
    tag(tagName: $tagName) {
      id
      name
      getTagPosts {
        id
        title
        imageUrl
        image
        slug
        tags {
          id
          name
        }
      }
    }
  }
`

export const POSTS_BY_AUTHOR = gql`
  query($authorId: Int!) {
    user(id: $authorId) {
      id
      firstName
      lastName
      email
      getUserPosts {
        id
        title
        imageUrl
        image
        slug
        tags {
          id
          name
        }
      }
    }
  }
`

export const ALL_USERS_LOGS = gql`
  query($page: Int!) {
    usersLogs(page: $page) {
      page
      hasNext
      hasPrev
      pages
      objects{${userLogsFields}}
    }
  }
`

export const SEARCH_RESULTS = gql`
  query($query: String!) {
    homepageSearch(query: $query) {
      ... on CourseType {
        id
        title
        price
        description
        thumbnail
        dateCreated
        teacher {
          id
          firstName
          lastName
          email
          phone
        }
      }
      ... on PostType {
        ${postFields}
      }
    }
  }
`
