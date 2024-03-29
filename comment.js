// pages/feedback/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txtStyle:"display:none",
    Style:"left:0px",
    delBtnWidth:"50",
    startX:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
   //手指刚放到屏幕触发
  touchS: function (e) {
    console.log(e);
    //判断是否只有一个触摸点
    console.log(e.touches[0].clientX)
    if (e.touches.length == 1) {
      this.setData({
        //记录触摸起始位置的X坐标
        startX: e.touches[0].clientX
      });
    }
  },
  //触摸时触发，手指在屏幕上每移动一次，触发一次
  touchM: function (e) {
    // console.log("touchM:" + e);
    var that = this

    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      //计算手指起始点的X坐标与当前触摸点的X坐标的差值
      var disX = that.data.startX - moveX;
      //delBtnWidth 为右侧按钮区域的宽度
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "margin-left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "margin-left:-" + delBtnWidth + "px";
        }
        var txt = disX > delBtnWidth / 2 ? "display:flex " : "display:none";
        that.data.Style = txtStyle;
        that.data.txtStyle = txt;
        //获取手指触摸的是哪一项
        that.setData({
          Style: that.data.Style,
          txtStyle: that.data.txtStyle 
        })
      }
    }
  },
  touchE: function (e) {
    var that = this
    that.clearDelete()
    console.log("下标" + e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    console.log(that.data.index)

    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      console.log(disX)
      console.log(delBtnWidth)
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var sty = disX > delBtnWidth / 2 ? "margin-left:-" + 150 + "rpx" : "left:0px";
      var txt = disX > delBtnWidth / 2 ? "display:flex " : "display:none";
      that.data.Style = sty;
      that.data.txtStyle = txt;
      //获取手指触摸的是哪一项
      that.setData({
        Style: that.data.Style,
        txtStyle: that.data.txtStyle 
      })

    }
  },
  clearDelete: function () { //移动其他商品时，当前商品删除none
   
      this.data.Style = "left:0px";
      this.data.txtStyle = "display:none";
    
    this.setData({
      Style: this.data.Style ,
      txtStyle: this.data.txtStyle 
    })
  }

})