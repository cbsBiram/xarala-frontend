import gql from 'graphql-tag'

export const NETWORK_INTERFACE = 'https://xarala.co/graphql/'

export function getThumbnail(url) {
  if (url) {
    return {
      uri: getFromMediaUrl(url),
    }
  }
  return require('../../assets/images/icon_black.png')
}

export function getFromMediaUrl(url) {
  return process.env.MEDIA_URL + url
}

export function getGraphqlOptions() {
  // options: {
  //   fetchPolicy: "network-only",
  // },
  return {}
}

const queryString = `
  categories {
    id
    name
    thumbnail
    description
  }
  courses {
    id
    title
    price
    thumbnail
    language{
      id
      name
      abr
    }
    slug
    level
    teacher {
      firstName
      lastName
    }
    students {
      id
    }
    categories {
      id
    }
    price
  }
`

export function getQuery() {
  return getSearchQuery()
}
export function getSearchQuery() {
  return gql`
    query SEARCH_QUERY($search: String!) {
      categories(search: $search) {
        id
        name
        thumbnail
        description
      }
      courses(search: $search) {
        id
        title
        price
        thumbnail
        language {
          id
          name
          abr
        }
        slug
        level
        teacher {
          firstName
          lastName
        }
        students {
          id
        }
        categories {
          id
        }
        price
      }
    }
  `
}

const coursFields = `
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

export function getTutorielQuery() {
  return gql`
    query TUTORIEL_QUERY($slug: String!) {
      course(courseSlug: $slug) {
          ${coursFields}
      }
      ${meQuery}
    }
  `
}

export function getRegisterQuery() {
  return gql`
    mutation RegisterQuery($email: String!, $password: String!) {
      register(email: $email, password: $password) {
        user {
          id
        }
      }
    }
  `
}
export function getUpdateProfilQuery() {
  return gql`
    mutation UpdateAccountQuery(
      $address: String
      $firstName: String
      $lastName: String
      $phone: String
      $userId: Int!
    ) {
      updateUser(
        firstName: $firstName
        lastName: $lastName
        address: $address
        phone: $phone
        userId: $userId
      ) {
        user {
          id
        }
      }
    }
  `
}
export function getChangePasswordQuery() {
  return gql`
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
        errors {
          messages
        }
      }
    }
  `
}

export function getLoginQuery() {
  return gql`
    mutation LoginQuery($email: String!, $password: String!) {
      tokenAuth(email: $email, password: $password) {
        token
        refreshToken
      }
    }
  `
}

export function getEnrollQuery() {
  return gql`
    mutation subscribeUserToCourse($courseId: Int!) {
      subscribeUserToCourse(courseId: $courseId) {
        course{
          ${coursFields}
        }
      }
    }
  `
}
export function getRefreshTokenQuery() {
  return gql`
    mutation RefreshTokenQuery($token: String!) {
      refreshToken(token: $token) {
        token
        refreshToken
      }
    }
  `
}
export function getSendPasswordResetEmailQuery() {
  return gql`
    mutation sendPasswordResetEmailQuery($email: String!) {
      sendPasswordResetEmail(email: $email) {
        user {
          email
          id
        }
      }
    }
  `
}

export function getResetPasswordWithCodeQuery() {
  return gql`
    mutation getResetPasswordWithCodeQuery(
      $email: String!
      $code: String!
      $newPassword: String!
    ) {
      resetPassword(email: $email, code: $code, newPassword: $newPassword) {
        user {
          email
          id
        }
      }
    }
  `
}

export function getCurrentUserQuery() {
  return gql`
    query ME_QUERY {
        ${meQuery}
    }

  `
}

const meQuery = `
me {
  id
  password
  firstName
  lastName
  dateJoined
  email
  isStudent
  isTeacher
  isWriter
  phone
  address
  title
  facebook
  twitter
  linkedin
  github
  avatar
  coursesEnrolled {
    ${coursFields}
  }
}
${queryString}`
