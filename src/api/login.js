import request from '@/http/request'

export function getPing () {
  return request({
    url: '/ping',
    method: 'get'
  })
}

export function login (data){
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export function logout(){
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function register(data){
  return request({
    url: '/user/register',
    method: 'post',
    data: data
  })
}
