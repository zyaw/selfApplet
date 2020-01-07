import {
  getOrgList
} from '../../api/user.js';
Page({
  data: {
    dataList: [],

  },
  onShow() {
    this.getList();
  },
  onLoad: function () {},
  getList() {
    getOrgList({
      id: 1
    }).then((res) => {
      this.data.dataList = res.data[0];
      this.setData({
        dataList: res.data[1],
      })
      console.log(res.data)
    });
  },
})