const crypto = require('crypto-js');
import {
  API_BASE_URL
} from './config';
import util from '../utils/util.js' //---方法一
// const util = require('../../utils/util.js')  //---方法二
//调用util.js里写好的方法，将小程序原生的request方法包装成一个Promise对象
export const getOrgList = ({
  id
}) => {
  console.log(API_BASE_URL, 'API_BASE_URL')
  return new Promise((resolve) => {
    wx.request({
      url: API_BASE_URL + '/api/wikiad/getcapybaras',
      method: 'get',
      data: {
        pos: id
      },
      header: {
        'content-type': 'application/json' // get默认值
      },
      success(res) {
        resolve(res.data);
      },
      fail(error) {
        reject(error);
      }
    })
  })
}