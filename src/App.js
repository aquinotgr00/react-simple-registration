import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <Layout>
      <Header>
        <h2 style={{color: 'white'}}>Registration</h2>
      </Header>
      <Content style={{ marginTop: 20, padding: '0 50px' }}>
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Redirect exact from='/' to='/register' />
          </Switch>
        </Router>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
