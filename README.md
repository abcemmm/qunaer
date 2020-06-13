# qunaer

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


新增内容11

css预处理器 sass less  stylus
stylus 安装
    npm install stylus --save   npm install stylus-loader --save
build ==> webpack.base.config.js ==>  29行配置路径快捷键
main.js引入阿里图标样式
安装axios  npm install axios


使用技术：vue-cli,vue-router,axios,vuex,swiper,better-scrolls


home页面组件：
    创建home.vue,页面，router下index.js页面配置路由,引入组件,app.vue页面出口router-view
    header组件：
        创建header页面，定义name:HomeHeader,home页面import引入,components定义，渲染
    点击去往city页面组件，router-link，to属性 /city ===>
        创建city组件
        router=>index.js 配置路由，引入
            ===>
                创建base文件夹，放置基础组件
                    创建cityheader组件
                        通过router-view to 实现页面跳转
                    创建citysearch组件
                        v-model绑定属性，v-show判断搜索显示
                        src -> api -> index.js 页面  请求city页面数据，city页面执行，赋值，通过props传值 cities 给 citysearch 页面
                        搜索框匹配城市  通过判断城市的每一项name,spell里是否包含 输入的keywords,有就返回出来
                        未匹配到数据 判断过滤数组的length,为空则显示
                    创建cityList组件
                        安装better-scroll组件  npm install better-scroll --save
                            better-scroll 默认禁止click事件 配置click为true
                            原理：如果内容高度大于父级高度，实现滚动
                                        使用   import BScroll from 'better-scroll'
                                                mounted(){
                                                    console.log(this.$refs.wraper)
                                                    this.scroll = new BScroll(this.$refs.wraper)
                                                }
                        热门城市
                            通过props将hotcity数据传递给citylist组件 v-for渲染在span标签
                        所有城市
                            通过props将cities数据传递给citylist组件 v-for 渲染
                    创建letter组件 字母表
                        props接受city组件传值cities,v-for渲染cities中key值
                        使用vuex实现点击跳转
                            创建store ==> index.js 存放vuex
                            安装 npm install vuex --save



    swiper组件
        创建swiper页面，定义name:HomeSwiper,home页面import引入,components定义，渲染
        github搜索vue-awesome-swiper
        swiper第一张不显示解决办法  v-if='swiperList.length > 0'
    headnav组件
        创建nav页面，定义name:HomeNav,home页面import引入,components定义，渲染
    homefavourite组件
        创建nav页面，定义name:HomeFavourite,home页面import引入,components定义，渲染
        星星评分 =>
            使用过滤器，用每一项的score数值/总数5*100+'%' ,计算出百分比，赋值width,绑定style
    weekend组件
        创建weekend页面，定义name:HomeWeekend,home页面import引入,components定义，渲染
    static => mock => index.json
        用来放置模拟数据
    src => api => index.js
        用来管理后台请求的数据
        通过axios请求数据 通过props将数据传给子组件
detail页面组件
    创建detail页面，router=>index.js,配置路由信息
    router-link,绑定to属性，传入每一项的id
    base=>banner.vue组件
        创建banner组件，detail页面引入，配置组件，输出
            banner数据  api=>index.js,axios请求数据，detail.vue页面封装函数，执行，传值给banner页面，banner页面通过props接受数据,渲染到页面
            图片点击预览
                创建公共组件common => Gallary.vue
                banner页面使用，import引入，components定义，template渲染
                   控制图片预览:v-show绑定isshow,默认为false,不显示，banner绑定点击事件，点击isshow变为true,显示，
                                预览页面点击关闭：绑定点击事件，点击向父组件banner发送事件，父组件接收，执行改变isshow状态为false,关闭
                detail-header组件
                    通过绑定v-if改变isshow的真假值，来做到一个显示，一个隐藏
                    滚动显示隐藏:添加事件监听scroll,绑定函数,通过document.documentElement.scrollTop获取滚动高度，
                                判断如果大于header高度，则isshow变为false,否则为true,
                card组件
                    创建card组件,detail页面import引入，components定义，template渲染
                recommend组件
                    detail父组件，获取值，绑定值，传给recommend子组件，子组件通过props接收数据，渲染到页面
                calendar组件 日历
                    创建card组件,detail页面import引入，components定义，template渲染
                    props接收父组件传值，v-for渲染
                comment组件 评论
                    创建comment组件,detail页面import引入，components定义，template渲染
                    detail页面通过解构赋值commentInfo,将数据传递给commit子组件，子组件通过props接收
                    图片显示共几张，超出隐藏，通过v-if判断index值
week页面组件
    创建week页面，router=>index.js,配置路由信息
    home下面的weekend组件, router-link,绑定to属性，传入每一项的id
    src=>api页面，请求week页面数据，week页面获取数据，并绑定

    header组件
        week页面import引入，components定义组件，template渲染
    list组件
        week页面import引入，components定义组件，template渲染
        week父组件传值，list子组件props接收数据，v-for循环，渲染数据
        页面滚动，引入better-scroll插件
            插件使用条件，外部盒子固定高，内部盒子高于父级盒子高度，并且父集只有一个子集

