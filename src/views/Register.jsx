import React from 'react'
import { withRouter } from 'react-router'
import { Form, Button, Row, Col, DatePicker, Radio, Spin, message } from 'antd'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import moment from 'moment'
import { FormInput, MyButton } from '../components'

// API
import { postRegisterUser } from '../api/auth'

class RegisterForm extends React.Component {
  state = { loading: false, registrationStatus: false }

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
    data.dob = moment(data.dob).format('YYYY-MM-DD')
    try {
      const response = await postRegisterUser(data)
      if (response.status === 200) {
        this.showLoginBtn()
      } else if (response.status === 422) {
        this.showErrors(response.data)
      }
    } catch (err) {
      message.error(`${err.response.data.message ? err.response.data.message:'Error'} Please try again later.`)
      for (const errKey in err.response.data) {
        if (err.response.data.hasOwnProperty(errKey)) {
          const message = err.response.data[errKey];
          this.showErrors(errKey, message)
        }
      }
    }
    this.setState({ loading: false })
  }

  showLoginBtn = () => {
    this.setState({registrationStatus: true})
  }
  
  showErrors = (key, error) => {
    const errField = {}
    errField[key] = { errors: [new Error(error)] }
    this.props.form.setFields(errField);
  }

  render () {
    const { form } = this.props
    const genders = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'others', label: 'Others' },
      { value: 'unknown', label: 'Prefer not to answer' },
    ]
    return (
      <Row>
        <Col span={12} offset={6}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Spin spinning={this.state.loading}>
              <Form onSubmit={this.handleSubmit} className="register-form">

                <FormInput
                  label='Mobile Number'
                  form={form}
                  name='phone'
                  options={{
                    initialValue: '',
                    rules: [
                      { required: true, message: 'Please input your phone number!' },
                      { min: 10, message: 'Please input your valid Indonesia Phone number!' }
                    ],
                  }}
                  component={<PhoneInput defaultCountry={'id'} inputClass={'ant-input'} />}
                />

                <FormInput
                  label='First Name'
                  form={form}
                  name='first_name'
                  options={{
                    initialValue: '',
                    rules: [{ required: true, message: 'Please input your first name!' }]
                  }}
                />

                <FormInput
                  label='Last Name'
                  form={form}
                  name='last_name'
                  options={{
                    initialValue: '',
                    rules: [{ required: true, message: 'Please input your last name!' }]
                  }}
                />

                <FormInput
                  label='Date of Birth'
                  form={form}
                  name='dob'
                  options={{
                    initialValue: moment(),
                    rules: [{ type: 'object', message: 'Please select your date of birth!' }]
                  }}
                  component={<DatePicker style={{width: '100%'}} />}
                />

                <FormInput
                  label='Gender'
                  form={form}
                  name='gender'
                  options={{
                    initialValue: '',
                  }}
                  component={<Radio.Group>
                    {genders.map(gender => {
                      return (
                        <Radio key={gender.value} value={gender.value}>{gender.label}</Radio>
                      )
                    })}
                  </Radio.Group>}
                />

                <FormInput
                  label='Email'
                  form={form}
                  name='email'
                  options={{
                    initialValue: '',
                    rules: [
                      { required: true, message: 'Please input your email address!' },
                      { type: 'email', message: 'The input is not valid E-mail!' },
                    ],
                  }}
                />

                <Form.Item>
                  <MyButton
                    block
                    type="primary"
                    htmlType="submit"
                    className="register-form-button"
                    loading={this.state.loading}
                    label='Register'
                  />
                </Form.Item>
              </Form>
            </Spin>
            {this.state.registrationStatus &&
              <Button block type="primary" htmlType="button" className="register-form-button">
                <Link to="/login">Login</Link>
              </Button>
            }
          </div>
        </Col>
      </Row>
    )
  }
}

const WrappedRegisterForm = Form.create({ name: 'register_form' })(RegisterForm);

export default withRouter(WrappedRegisterForm)