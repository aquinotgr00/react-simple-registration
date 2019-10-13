import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './LoginForm'
import { FormInput } from './form/Input'
import { MyButton } from './MyButton'

describe('LoginForm', () => {
  const wrapper = shallow(<LoginForm />)

  it('should render login form and have form input in it', () => {
    expect(wrapper.find(FormInput)).toHaveLength(2)
  })

  it('should render login form and have button in it', () => {
    expect(wrapper.find(MyButton)).toHaveLength(1)
  })
})