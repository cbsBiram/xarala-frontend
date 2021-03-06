import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Prenez Votre carrière en main."', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).toEqual('Prenez Votre carrière en main.')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Prenez Votre carrière en main."', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
