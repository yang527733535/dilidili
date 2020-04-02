
import request from '../utils/request'
export async function login(params) {
    console.log(params)
     
    return request('http://localhost:8082/api/auth/login', {
      method: 'POST',
      params,
    });
  }