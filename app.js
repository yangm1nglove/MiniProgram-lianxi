// app.js
App({
  //1. 应用第一次启动的就会触发的事件
  onLaunch(){
    //在应用第一次启动的时候,就可以获取用户的个人信息
    // console.log('onLaunch');
  },

  //2.应用被用户看到
  onShow(){
    //对应用的数据或者页面效果 重置
    // console.log('onShow');
  },
  //应用 被隐藏了
  onHide(){
    // 暂时或者清除定时器
    console.log('onHide');
  },
  //当应用的代码发生了报错的时候 就会触发
  onError(err){
    //在应用发生代码报错的时候,收集用户错误信息 通过异步请求将错误信息发送后台去
    console.log('onError');
    console.log(err); 
  },
  //页面找不到就会触发
  //当应用第一次启动的时候,如果找不到第一个入口页面 才会触发
  onPageNotFound(){
    //如果页面不存在了 通过js的方式来重新跳转页面 重新调到第二个首页
    //不能调到tabbar页面的  导航组件类似
    wx.navigateTo({
      url: 'pages/button/button'
    })
    console.log('onPageNotFound');
  }
})
