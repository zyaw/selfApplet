Component({
  options: {
    addGlobalClass: true, //全局样式
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗列表
    optionList: {
      type: Array,
      value: ['tee']
    },
    // 弹窗文本
    valueText: {
      type: String,
      value: '底部弹窗'
    },
    //显示隐藏
    myVisible: {
      type: Boolean,
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}, //
  },
  methods: {
    // 点击选项
    getOption: function (e) {
      var that = this;
      that.triggerEvent("myevent", e.currentTarget.dataset.value)
      that.hideModal();
    },
    //取消
    mCancel: function () {
      var that = this;
      that.hideModal();
    },
    // ----------------------------------------------------------------------modal
    // 显示遮罩层
    showModal: function () {
      var that = this;
      // 创建动画实例
      var animation = wx.createAnimation({
        duration: 400, //动画的持续时间
        timingFunction: 'ease', //动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
      })
      this.animation = animation; //将animation变量赋值给当前动画
      var time2 = setTimeout(function () {
        that.setData({
          myVisible: false
        })
        that.slideIn(); //调用动画--滑入
        clearTimeout(time2);
        time2 = null;
      }, 220)

      that.triggerEvent("showModal")
    },

    // 隐藏遮罩层
    hideModal: function () {
      var that = this;
      var animation = wx.createAnimation({
        duration: 400, //动画的持续时间 默认400ms
        timingFunction: 'ease', //动画的效果 默认值是linear
      })
      this.animation = animation
      that.slideDown(); //调用动画--滑出
      var time1 = setTimeout(function () {
        that.setData({
          myVisible: true
        })
        clearTimeout(time1);
        time1 = null;
      }, 220) //先执行下滑动画，再隐藏模块

    },
    //动画 -- 滑入
    slideIn: function () {
      this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
      this.setData({
        //动画实例的export方法导出动画数据传递给组件的animation属性
        animationData: this.animation.export()
      })
    },
    //动画 -- 滑出
    slideDown: function () {
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export(),
      })
    },
  },



})