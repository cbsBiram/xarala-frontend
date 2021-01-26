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

export const lessonFields = `
      id
      title
      isVideo
      text
      slug
      file
      videoUrl
      videoId
      duration
      platform
      drafted
      dateCreated
`

export const postFields = `
  id
  title
  content
  description
  slug
  publishDate
  imageUrl
  image
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
  phone
  address
  title
  avatar
  coursesCreated{
    id
    title
    slug
    price
  }
  coursesEnrolled{
    id
    title
    slug
    price
  }
  postSet{
    id
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
  language{
    id
    name
    abr
  }
  promoteVideo
  teacher {${userFields}}
  students {${userFields}}
  courseChapters {
    id
    name
    dateCreated
    slug
    drafted
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
  }
`
