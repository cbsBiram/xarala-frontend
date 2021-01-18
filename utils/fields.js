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
      avatar
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
      }`
