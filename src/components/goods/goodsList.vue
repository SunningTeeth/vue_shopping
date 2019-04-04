<template>
  <div class="goodsList">
    <div class="goods_item">
      <img src="../../images/8.jpg" alt>
      <h3>小米(MI)Note 16G</h3>
      <div class="info">
        <div class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2199</span>
        </div>
        <div class="sell">
          <span>热卖中</span>
          <span>剩余60件</span>
        </div>
      </div>
    </div>

    <div class="goods_item">
      <img src="../../images/8.jpg" alt>
      <h3>小米(MI)Note 16G小米(MI)Note 16G</h3>
      <div class="info">
        <div class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2199</span>
        </div>
        <div class>
          <span>热卖中</span>
          <span>剩余60件</span>
        </div>
      </div>
    </div>

    <div class="goods_item">
      <img src="../../images/8.jpg" alt>
      <h3>小米(MI)Note 16G</h3>
      <div class="info">
        <div class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2199</span>
        </div>
        <div class>
          <span>热卖中</span>
          <span>剩余60件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.goodsList {
  display: flex;
  /* 让其换行 */
  flex-wrap: wrap;
  background-color: #fff;
  padding: 5px;
  justify-content: space-between;
}
.goodsList .goods_item {
  width: 48%;
  margin: 3px;
  padding: 2px;
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 3px #cccccc;
  /* 为让文字和图片成上下自动排列 ，因为文字多少不一样*/
  display: flex;
  flex-direction: column;
  /* 改变主轴的方向 */
  justify-content: space-between;
  min-height: 310px;
}
.goods_item img {
  width: 100%;
}
.goods_item h3 {
  font-size: 18px;
}
.goods_item .info {
  background-color: #eee;
}
.goods_item .info .price {
  line-height: 30px;
}
.goods_item .info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods_item .info .price .old {
  text-decoration: line-through;
  font-size: 12px;
}
.goods_item .info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  /* color: red; */
}
</style>
