import { Component } from 'react'
import Router from 'next/router'
import Admin from '../layouts/Admin'

const redirection = () => {
  window.location = '/'
}

const redirectAfterLogin = (next) => {
  next !== undefined ? (window.location = next) : (window.location = '/')
}

export const login = async ({ token }) => {
  window.localStorage.setItem('token', token)
  const { next } = Router.query
  redirectAfterLogin(next)
}

export const signup = async () => {
  // cookie.set('token', token, { expires: 1 })
  // localStorage.setItem('token', token)
  Router.push('/auth/login')
}

export const logout = () => {
  // cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  window.localStorage.removeItem('token')
  redirection()
}

export const getToken = () => {
  return process.browser ? window.localStorage.getItem('token') : ''
}

// Gets the display name of a JSX component for dev tools
const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component'

export const withAuthSync = (WrappedComponent) =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps(ctx) {
      const token = auth(ctx)
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    constructor(props) {
      super(props)
      this.syncLogout = this.syncLogout.bind(this)
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout)
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout)
      window.localStorage.removeItem('logout')
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        Router.push('/auth/login')
      }
    }

    render() {
      return (
        <Admin>
          <WrappedComponent {...this.props} />
        </Admin>
      )
    }
  }

export const auth = (ctx) => {
  const token = getToken()

  /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/auth/login' })
    ctx.res.end()
    return
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/auth/login')
  }

  return token
}
