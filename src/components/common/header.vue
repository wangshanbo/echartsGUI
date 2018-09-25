<template>
  <header class="ws-header">
    <nav class="nav-container clearfix">
      <div class="logo">
        <router-link to="/"><img src="~/assets/img/src/common/logo.png" alt="ws"></router-link>
      </div>
      <div class="nav-menu">
        <router-link to="/demo" class="nav-item">示例</router-link>
        <router-link to="/api" class="nav-item">API</router-link>
        <router-link to="/test" class="nav-item">test</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapState({
        })
    },
    created () {
    },
    mounted () {
    },
    watch: {
    },
    methods: {
    }
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "~styles/base.scss";
.ws-header{
  @include responsive-default {
    .nav-container{
      height: 60px;
      padding-top: 10px;
      .logo{
        float: left;
        margin-left: 30px;
        img{
          height: 60px
        }
      }
      .nav-menu{
        float: right;
        height: 60px;
        line-height: 60px;
        margin-right: 30px;
        .nav-item{
          padding-right: 10px;
          padding-left:10px;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>

