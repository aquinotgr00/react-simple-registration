import React from 'react'
import { shallow } from 'enzyme'
import Register from './Register'

describe('Register', () => {
  it('should render register page', () => {
    shallow(<Register />)
  })
})