<template>
  <section class="ws-api">
      这是API页面
  </section>
</template>
<script>
export default {
    name: 'api',
    metaInfo: {
        title: 'API'
    },
    data () {
        return {

        }
    },
    created () {
    },
    computed: {
    },
    watch: {
    },
    mounted () {
    },
    methods: {

    },
    components: {
    }

}
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.ws-api {
  @include responsive-default {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
