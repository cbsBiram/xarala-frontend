import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/client/testing'

import Login from './Login'
import Register from './Register'

describe('Login Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <MockedProvider>
        <Login />
      </MockedProvider>
    )

    expect(wrapper.find('h2')).toHaveLength(1)
  })
})

describe('Register Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <MockedProvider>
        <Register />
      </MockedProvider>
    )

    expect(wrapper.find('h2')).toHaveLength(1)
  })
})
