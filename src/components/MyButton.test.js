import React from 'react'
import { shallow } from 'enzyme'
import { MyButton } from './MyButton'

describe('MyButton', () => {
  it('should render button properly', () => {
    shallow(<MyButton />)
  })
})