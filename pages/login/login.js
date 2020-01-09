// login.js
const app = getApp()
import {
  getLogin
} from '../../api/login'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    account: '',
    pwd: '',
    accountinput: false,
    pwdinput: false
  },
  accountinput: function (e) {
    this.setData({
      account: e.detail.value,
      accountinput: true

    })
    if (this.data.accountinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      })
    }
  },
  pwdinput: function (e) {
    this.setData({
      pwd: e.detail.value,
      pwdinput: true
    })
    if (this.data.accountinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      })
    }
  },
  //登陆
  formSubmit: function (e) {
    console.log(e)
    this.setData({
      disabled: true
    })
    let prame = {
      union_id: 'o9GhT56gxQvKdxp7IQyNNSN40O54',
      phone: e.detail.value.account,
      content: e.detail.value.pwd
    }
    getLogin({
      prame
    }).then((res) => {
      if (res.status == 0) {
        wx.showToast({
          title: "‘通知",
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../index/index'
          })
        }, 2000)
      } else {
        wx.showToast({
          title: "shibai",
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      disabled: false
    })
    var student = wx.getStorageSync('student')
    if (typeof (student) == 'object' && student.account != '' && student.classid != '') {
      wx.switchTab({
        url: '../teacher/teacher'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.account == '' || this.data.pwd == '') {
      this.setData({
        disabled: true
      })
    } else {
      this.setData({
        disabled: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})