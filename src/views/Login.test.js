import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

describe('Login', () => {
  it('should render Login properly', () => {
    shallow(<Login />)
  })
})