import { mount } from 'enzyme'

import Login from './Login'

/** @test {Title Component} */
describe('Login Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Login />)

    expect(wrapper.find('h2')).toHaveLength(1)
  })
})
