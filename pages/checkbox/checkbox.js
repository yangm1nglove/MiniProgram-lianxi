// pages/checkbox/checkbox.js
Page({
    data:{
        list:[
            {
                id:0,
                name:"🍇",
                value:"putao"
            },
            {
                id:1,
                name:"🍎",
                value:"pingguo"
            },
            {
                id:2,
                name:"🍌",
                value:"xiangjiao"
            },
        ],
        val:[]
    },
    Change(e){
        this.setData({
            val:e.detail.value
        })
    }
})