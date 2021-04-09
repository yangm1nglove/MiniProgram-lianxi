// components/Tabs/Tabs.js
Component({
    /**
     * 存放要送父组件中接收数据
     */
    properties: {
        //要接受的数据的名称
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     1.页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！ 
     2.组件js 文件中 存放事件回调函数的时候 必须要存在methods中！！！
    */
    methods: {
        hanldeItemTap(e) {
            /*
                1.绑定点击事件 需要在methods中绑定
                2.获取被点击的索引
                3.获取原数组
                4.对数组循环
                    1.给每一个循环项 选中属性 改为false
                    2.给当前索引的项添加激活选中效果
                5.点击事件触发的时候, 触发父组件中的自定义事件,并且传递出去
                this.triggerEvent('父组件自定义事件的名称',要传递的参数 )
            */
            /*
                获取索引
            */ 
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('itemChange',{index}); 
        }
    }
})