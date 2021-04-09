// pages/demo04/demo04.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:0
    },
    handleInput(e){
        this.setData({
            num:e.detail.value
        })
    },
    //加减按钮操作 
    handletap(e){
        //获取自定义属性
        this.setData({
             num:(this.data.num-0)+e.currentTarget.dataset.icur,
                
        })
    }
})