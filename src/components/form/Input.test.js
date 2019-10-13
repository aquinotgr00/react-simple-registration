import React from 'react'
import { shallow } from 'enzyme'
import { FormInput } from './Input'
import { Form } from 'antd'

const FakeLogin = props => {
  return (
    <Form>
      <FormInput
        form={props.form}
        name='name'
        options={{initalValue: ''}}
      />
    </Form>
  )
}

Form.create({ name: 'fake_form' })(FakeLogin)

describe('FormInput', () => {
  it('should render form and have form input in it', () => {
    const wrapper = shallow(<FakeLogin />)
    expect(wrapper.find(FormInput)).toHaveLength(1)
  })
})