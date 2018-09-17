<template>
  <div class="Ws-index">
    <section class="Ws-introduct container">
      <div class="row introduct-container">
        <div class="col-xs-4 logo">
          <img src="~/assets/img/src/common/brand.png">
        </div>
        <div class="col-xs-8 slogen">
          <p class="p2">基于Vue.js通用应用框架</p>
        </div>
        <el-button type="primary">主要按钮</el-button>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
    name: 'home',
    metaInfo: {
        titlewdwqd: 'index',
        meta: [{
            name: 'keywords',
            content: '通用应用框架 Ws vue'
        }, {
            name: 'description',
            content: '基于Vue.js通用应用框架'
        }]
    },
    data () {
        return {
        }
    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.Ws-index {
  @include responsive-default {
    .Ws-introduct{
      .introduct-container{
        margin-top: 50px;
        height: 250px;
        position: relative;
        .logo{
          height: 100%;
          img{
            height: 100%;
          }
        }
        .slogen{
          position: absolute;
          right: 0;
          bottom: 0;
          .p1{
            font-size: 100px;
          }
          .p2{
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
