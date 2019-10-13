import React from 'react'
import { withRouter } from 'react-router'
import { Form, Row, Col, Spin, message } from 'antd'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

// API
import { postLoginUser } from '../api/auth'

class Login extends React.Component {
  state = { loading: false }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true })
        this.postDataToApi(values)
      }
    })
  }
  
  postDataToApi = async data => {
    try {
      const response = await postLoginUser(data)
      console.log(response)
      message.success('You have logged in. Enjoy!')
    } catch (err) {
      message.error(`${err.response.data.message ? err.response.data.message:'Error'} Please try again later.`)
    }
    this.setState({ loading: false })
  }

  render () {
    const { form } = this.props

    return (
      <Row>
        <Col span={12} offset={6}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Spin spinning={this.state.loading}>
              <LoginForm
                form={form}
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
              />
            </Spin>
            <Link to='/register'>Back to register</Link>
          </div>
        </Col>
      </Row>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(Login)

export default withRouter(WrappedLoginForm)