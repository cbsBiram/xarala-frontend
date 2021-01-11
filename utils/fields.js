export const courseFields = `
          id
          title
          price
          description
          thumbnail
          language{
            id
            name
            abr
          }
          price
          teacher {
            firstName
            lastName
            avatar
          }
          students {
            id
          }
          courseChapters {
            id
            name
            dateCreated
            slug
            drafted
            courseLessons {
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
            }
          }
          categories {
            id
            thumbnail
            name
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
`

export const postFields = `
      id
      title
      description
      author {
        email
        firstName
        lastName
      }`
