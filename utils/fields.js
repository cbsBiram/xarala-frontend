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
      }
      coursesEnrolled{
        id
        title
      }
      postSet{
        id
      }
      bio
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
    courseLessons {${lessonFields}
    }
  }
  categories {
    id
    thumbnail
    name
  }
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

export const quizFields = `
  id
  title
  description
`

export const userAnswerFields = `
  id
  quiz {
    id
  }
`

export const categoryFields = `
  id
  name
`

export const errorFields = `
  messages
`
