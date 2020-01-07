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
      value: true,
    }
  },
  /**
   * 页面的初始数据
   */
  data: {},
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
      that.setData({
        myVisible: true
      })
      that.triggerEvent("showModal")
    },

    // 隐藏遮罩层
    hideModal: function () {
      var that = this;
      that.setData({
        myVisible: false
      })
    },
  },



})