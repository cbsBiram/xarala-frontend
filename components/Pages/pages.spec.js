import { shallow } from 'enzyme'
import React from 'react'
import Home from './Home'

describe('With Enzyme', () => {
  it('App shows "Prenez Votre carrière en main."', () => {
    const app = shallow(<Home />)

    expect(app.find('h1').text()).toEqual('Prenez Votre carrière en main.')
  })
})
