// pages/shijian/shijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"pipi",
    age:"18",
    num:"0",
    color:"green",
    size:"300",
    title:"",
    anniuzhuangtai:false,
    inputchufajiaodian:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //触发焦点
  onfocus(e){
    console.log(e);
  },



  //输入框输入的事件
  onInput(e){
    console.log(e);
    let value = e.detail.value
    this.setData({
      title:value
    })
  },





//点击颜色块取随机数 
   
clickbox(){
  //随机数取值
  let rdm = parseInt(Math.random()*100)
  // RGB颜色取值
  let r1 = parseInt(Math.random()*255)
  let r2 = parseInt(Math.random()*255)
  let r3 = parseInt(Math.random()*255)
  let color = `rgb(${r1},${r2},${r3})`
  //色块大小调整
  let size = parseInt(Math.random()*300)
  size = size<100 ? 100 :size


  console.log(size);
  this.setData({
    num : rdm,
    color:color,
    size:size,
  })
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