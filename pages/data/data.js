Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:"张三",
   age:18,
   bool:false,
   book:["1123","sdasd","灰太狼"],
   user:{
    name:"牛马表",
    age:"2000",
    gender:"男"
    },

    shujuji:[
      {
        id:"1",
        biaoti:"JS时间戳转为时间格式的多功能方法",
        tupian:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200611/1591843113.jpg",
        time:"2023-01-10"
      },
      {
        id:"2",
        biaoti:"WXS根据时间戳计算时间间隔",
        tupian:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200611/1591843113.jpg",
        time:"2023-01-10"
      },
      {
        id:"3",
        biaoti:"微信小程序wxs时间戳格式化多功能转换方法",
        tupian:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200611/1591843113.jpg",
        time:"2023-01-10"
      }
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    setTimeout(() => {
      this.setData({
        name:"厉色"
      })
    }, 2000);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})