const crypto = require('crypto-js');
import {
  API_ZYAW_URL
} from './config';
import util from '../utils/util.js' //---方法一
// const util = require('../../utils/util.js')  //---方法二
//调用util.js里写好的方法，将小程序原生的request方法包装成一个Promise对象
export const getLogin = ({
  prame
}) => {
  console.log(API_ZYAW_URL, 'API_ZYAW_URL')
  return new Promise((resolve) => {
    wx.request({
      url: API_ZYAW_URL + '/wechat/bind/user',
      method: 'POST',
      data: prame,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // post默认值
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