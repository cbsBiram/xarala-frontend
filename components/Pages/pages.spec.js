import { shallow } from 'enzyme'
import React from 'react'
import Home from './Home'
import Error404 from './404'

describe('With Enzyme', () => {
  it('App shows "Prenez Votre carrière en main."', () => {
    const app = shallow(<Home />)

    expect(app.find('h1').text()).toEqual('Prenez Votre carrière en main.')
  })
})

describe('With Enzyme', () => {
  it('App shows "Sorry! Page Non trouvée"', () => {
    const app = shallow(<Error404 />)

    expect(app.find('p').text()).toEqual('Sorry! Page Non trouvée')
  })
})
