// pages/shijian/shijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"pipi",
    age:"18"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  dianjichufa(event){
    
    let {age,myname}=event.currentTarget.dataset
    console.log(age,myname);
    this.setData({
      name:age,
      age:myname
    })
  },

  diercidianji(){
    this.setData({
      name:"不牛逼",
      age:"666"
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})