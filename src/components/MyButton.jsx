import React from 'react'
import { Button } from 'antd'

export const MyButton = props => {
  return (
    <Button {...props}>
      {props.label}
    </Button>
  )
}