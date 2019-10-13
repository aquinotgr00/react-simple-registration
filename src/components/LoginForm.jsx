import React from 'react'
import { Form, Input, Icon } from 'antd'
import { FormInput, MyButton } from '../components'

export default class LoginForm extends React.Component {
  render () {
    const { form } = this.props
    return (
      <Form onSubmit={this.props.handleSubmit} className="login-form">
                      
        <FormInput
          form={form}
          name='email'
          options={{
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'The input is not valid E-mail!' },
            ],
          }}
          component={<Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />}
        />
        
        <FormInput
          form={form}
          name='password'
          options={{
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your password!' },
            ],
          }}
          component={<Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />}
        />

        <Form.Item>
          <MyButton
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={this.props.loading}
            label='Login'
          />
        </Form.Item>
        
      </Form>
    )
  }
}