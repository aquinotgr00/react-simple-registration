import React from 'react'
import { Form, Input } from 'antd'

export const FormInput = props => {
  const { getFieldDecorator } = props.form
  return (
    <Form.Item label={props.label}>
      {getFieldDecorator(props.name, props.options)(props.component ? props.component:<Input />)}
    </Form.Item>
  )
}