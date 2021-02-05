export const answerFields = `
    id
    label
    isCorrect
`

export const categoryFields = `
  id
  name
  thumbnail
`

export const errorFields = `
  messages
`

export const languageFields = `
  id
  name
  abr
`

export const lessonFields = `
  id
  title
  isVideo
  lectureNumber
  text
  slug
  file
  videoUrl
  videoId
  duration
  platform
  drafted
  dateCreated
  getPrevious
  getNext
`

export const postFields = `
  id
  title
  content
  description
  slug
  publishDate
  submitted
  published
  timestamp
  imageUrl
  image
  getNext
  getPrevious
  tags{
    id
    name
    description
  }
  author {
    email
    firstName
    lastName
    avatar
  }
`

export const userFields = `
  id
  email
  firstName
  lastName
  isActive
  isStudent
  isTeacher
  isWriter
  isStaff
  phone
  address
  title
  avatar
  coursesCreated{
    id
    title
    slug
    price
    level
    description
    courseChapters {
      id
      name
      slug
      quiz {
        id
        title
        description
      }
    }
  }
  coursesEnrolled{
    id
    title
    slug
    price
    courseChapters {
      id
      name
      slug
      quiz {
        id
        title
        description
      }
    }
  }
  getUserPosts{
    ${postFields}
  }
  bio
`

export const questionFields = `
    id
    label
    answers {${answerFields}}
`

export const quizFields = `
  id
  title
  description
  questions {${questionFields}}
  chapter {
    slug
  }
`

export const chapterFields = `
  id
  name
  dateCreated
  slug
  drafted
  chapterNumber
  courseLessons {${lessonFields}}
  quiz {${quizFields}}
`

export const courseFields = `
  id
  title
  price
  description
  shortDescription
  thumbnail
  slug
  language{${languageFields}}
  teacher {${userFields}}
  students {${userFields}}
  dateCreated
  courseChapters {
    id
    name
    dateCreated
    slug
    drafted
    chapterNumber
    courseLessons {${lessonFields}}
    quiz {${quizFields}}
  }
  categories {${categoryFields}}
`

export const userAnswerFields = `
  id
  question {${questionFields}}
  quiz {
    title
    questions {${questionFields}
    }
  }
  answer{
    label
    isCorrect
  }
`

export const orderFields = `
  id
  items{
    course{${courseFields}}
    price
    quantity
    id
  }
`

export const tagFields = `
    id
    name
    description
    postSet{
      ${postFields}
    }
`
