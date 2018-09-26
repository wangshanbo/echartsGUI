<template>
  <section class="ws-login">
      这是登陆页面
      <div><el-button type="primary" @click="login">登陆</el-button></div>
  </section>
</template>
<script>
import * as types from '~/src/store/mutation-types';
export default {
    name: 'login',
    metaInfo: {
        title: '登陆'
    },
    data () {
        return {};
    },
    created () {},
    computed: {},
    watch: {},
    mounted () {},
    methods: {
        login () {
            this.$store.commit(types.SET_ISLOGIN, true);
            setTimeout(() => {
                this.$router.push('/api');
            });
        }
    },
    components: {}
};
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.ws-login {
  @include responsive-default {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
