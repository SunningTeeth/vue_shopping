<template>
  <div class="desc-contianer">
    <h1>{{ descObj.title }}</h1>
    <hr>
    <div v-html="descObj.content" class="content"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      descObj: null
    };
  },
  created() {
    this.getdescInfo();
  },
  methods: {
    getdescInfo() {
      this.$http.get("../../data/goods/desc.json").then(res => {
        this.descObj = res.body[0];
        console.log(this.descObj);
      });
    }
  }
};
</script>


<style lang="scss">
.desc-contianer {
  h1 {
    font-size: 18px;
    text-align: center;
    color: #26a2ff;
    margin: 10px 0px;
  }
  .content {
    padding: 4px;
    img{
      width: 100%;
    }
  }
}
</style>
