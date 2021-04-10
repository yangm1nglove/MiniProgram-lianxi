// pages/demo18/demo18.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //onLoad发送页面请求,初始化页面数据
        console.log('onLoad');
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow');
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady'); 
    }, 
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide');
    },
    /**
     * 生命周期函数--监听页面卸载 也是可以通过点击超链接来演示
     */
    onUnload: function () {
        console.log('onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     * 需要让页面出现上下滚动才行
     */
    onReachBottom: function () {
        //上拉加载上一页数据
        console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log('onShareAppMessage')
    },
    /*
    只要页面一滚动就出发了 
    */ 
    onPageScroll(){
        console.log('onPageScroll')
    },
    /* 
        小程序发生了横屏树屏切换时触发
    */
    onResize(){
       console.log("onResize");  
    },
    onTabItemTap(){
        console.log('onTabItemTap');
    }
})