<template>
  <div class="shopcar_container">
    <div class="goods_list">
      <div class="mui-card" v-for="(item,i) in GoodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 开关 -->
            <!-- 根据 selected 的值来确定开关是否被选中 -->
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChange(item.id)"
            ></mt-switch>
            <img :src="item.img_url" alt="损坏" title="图片">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <div class="cont">
                <span class="price">￥{{ item.price }}</span>
                <!-- 问题：怎么从购物车获取商品的数量？-->
                <!-- 1.我么可以先创建一个空对象，然后循环购物车里所有商品的数据
                    把当前循环的商品的 id 作为对象的属性名， count 作为属性值，
                    这样循环完毕之后，就会得到一个对象，类似于：{ 0:3,1:4,2:99}
                -->
                <shopcarNumbox
                  :goodsCount="$store.getters.getGoodsCount[item.id]"
                  :goodsID="item.id"
                ></shopcarNumbox>

                <a href="#" @click.prevent="del(item.id,i)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="goods_total">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="left">
              <p>总计(不含运费)</p>
              <p>
                已购选商品
                <span class="num">{{ $store.getters.getGoodsCountAndAmount.count }}</span>&nbsp;件&nbsp;总价:
                <span
                  class="totalPrice"
                >￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span>
              </p>
            </div>
            <div class="right">
              <mt-button type="danger" size="small">去结算</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>{{ $store.getters.getGoodsSelected }}</p>
  </div>
</template>

<script>
import shopcarNumbox from "../subcomponents/shopcar_numbox.vue";

export default {
  data: function() {
    return {
      value: false,
      GoodsList: [] //商品列表数组
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取购物车信息列表
      this.$http.get("../../data/shopcar/goodsList.json").then(res => {
        this.GoodsList = res.body;
      });
    },
    del(id, index) {
      //删除方法

      //删除 GoodsList 里面的数据
      this.GoodsList.splice(index, 1);

      //删除 store 中的数据
      this.$store.commit("delGoodsInfo", { id: id });
    },
    selectedChange(id) {
      //当选择状态改变时触发
      this.$store.commit("updateGoodsSelected", {
        id: id,
        selected: this.$store.getters.getGoodsSelected[id]
      });
    }
  },
  components: {
    shopcarNumbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar_container {
  background-color: #ccc;
  overflow: hidden;
  .goods_list {
    .mui-card-content-inner {
      display: flex;
      img {
        width: 60px;
        height: 60px;
        margin-left: 5px;
      }
      h1 {
        font-size: 13px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 5px;
        .cont {
          .price {
            color: red;
            font-weight: bold;
          }
          .mui-numbox {
            height: 25px;
          }
        }
      }
    }
  }
  .goods_total {
    .mui-card-content-inner {
      display: flex;
      justify-content: space-between;
      align-items: center; //纵向居中
      .left {
        .num,
        .totalPrice {
          color: red;
          font-weight: bold;
        }
      }
    }
  }
}
</style>


