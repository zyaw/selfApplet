const crypto = require('crypto-js');
import {
  API_BASE_URL
} from './config';

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