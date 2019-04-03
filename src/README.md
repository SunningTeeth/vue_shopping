#这是一个nb的项目
##用心去感受，每一行代码的诗清雅意
###哈哈
##制作首页
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的tabbar..html
  +在制作购物车小图标的时候，操作会相对多一些：
    +先把 扩展图标的css样式，拷贝到项目中
    +拷贝扩展字体库 ttf 文件到项目中
    +为购物车小图标，添加如下样式：'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配信息


##制作首页轮播图
  +

##加载首轮轮播图数据
1.获取数据，通过vue-resource获取
2.使用vue-resource 的 this.$http.get 获取数据
3.获取到的数据，要保存到data身上
4.使用v-for 循环渲染每一项

##