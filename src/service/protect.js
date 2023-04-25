/**

 */

import axios from '../utils/axios'

export async function  upload(formData) {
    let response=null
    let res=null
    await axios.post('/newupload', formData).then(response => {
      // 处理响应数据
      console.log(response.data);
      res=response.data
    })
    .catch(error => {
      // 处理错误
      console.error(error)
      return response.data
    })
    return res
}

export async function solve(params) {
  let response=null
  let res=null
  await axios.post('http://pppyy.f3.fgct.cc/getresult', params).then(response => {
    // 处理响应数据
    console.log(response.thing);
    res=response.thing
  })
  .catch(error => {
    // 处理错误
    console.error('errer',error)
    return response.thing
  })
  return res
}