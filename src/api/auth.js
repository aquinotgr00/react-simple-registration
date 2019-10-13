import axios from 'axios'

const basicRequest = () => {
  const basicAxios = axios.create({baseURL: 'http://localhost:8000'})
  return basicAxios
}

function authRequest (token) {
  const authAxios = axios.create({baseURL: 'http://localhost:8000'})
  authAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  return authAxios
}

export function postRegisterUser (data) {
  return basicRequest().post('signup', data)
}

export function postLoginUser (data) {
  return basicRequest().post('signin', data)
}

export function getProfileApi (token) {
  return authRequest(token).get('profile')
}