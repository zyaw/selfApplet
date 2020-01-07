//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hiddenmodalput: true,
    name: "",
    phoneNum: '',
    checkValue: '底部弹窗',
    visible: true,
    bottomlist: ['text-1', 'text-12'],
    showModals: false, // 显示modal弹窗
    single: false // false 只显示一个按钮，如果想显示两个改为true即可
  },
  //事件处理函数
  bindViewTap: function () {
    //  this.getUserInfo()
    wx.getUserInfo({
      success: function (res) {
        console.log(res, 1)
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow() {},
  showPopup() {
    this.setData({
      showModals: false ? false : true
    })
  },
  // 点击取消按钮的回调函数
  modalCancel(e) {
    // 这里面处理点击取消按钮业务逻辑
    console.log('点击了取消')
  },
  // 点击确定按钮的回调函数
  modalConfirm(e) {
    // 这里面处理点击确定按钮业务逻辑
    console.log('点击了确定')
  },
  showModal() {
    //建议使用 wx.showModal
    this.setData({
      hiddenmodalput: false
    })
  },
  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },

  confirmM: function (e) {
    console.log("姓名：" + this.data.name + "  电话：" + this.data.phoneNum);
  },

  iName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  iPhoneNum: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
  //弹窗start
  onReady: function () {
    //获得popup组件
  },

  showBtn() {
    var that = this
    // wx.showToast({
    //   title: '失败', //提示文字
    //   duration: 2000, //显示时长
    //   mask: true, //是否显示透明蒙层，防止触摸穿透，默认：false  
    //   icon: 'success', //图标，支持"success"、"loading"  
    //   success: function () {}, //接口调用成功
    //   fail: function () {}, //接口调用失败的回调函数  
    //   complete: function () {} //接口调用结束的回调函数  
    // })
    wx.showModal({
      title: '删除图片',
      content: '确定要删除该图片？',
      showCancel: true, //是否显示取消按钮
      cancelText: "否", //默认是“取消”
      cancelColor: 'skyblue', //取消文字的颜色
      confirmText: "是", //默认是“确定”
      confirmColor: 'skyblue', //确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          temp.splice(index, 1),
            that.setData({
              tempFilePaths: temp,
            })
        }
      },
      fail: function (res) {}, //接口调用失败的回调函数
      complete: function (res) {}, //接口调用结束的回调函数（调用成功、失败都会执行）
    })
    // wx.showActionSheet({
    //   itemList: ['列1', '列2', '列3'], //显示的列表项
    //   success: function (res) { //res.tapIndex点击的列表项
    //     console.log("点击了列表项：" + that[res.tapIndex])
    //   },
    //   fail: function (res) {},
    //   complete: function (res) {}
    // })
  },
  //弹窗end

  //底部弹窗 start
  handleShow: function () {
    this.selectComponent("#popupBottom").showModal()
  },
  onMyEvent(e) {
    let value = e.detail
    this.setData({
      checkValue: value
    })
  },
  //底部弹窗 end



  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})