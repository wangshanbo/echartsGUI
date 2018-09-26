<template>
  <div class="layout-normal">
  
    <transition name="fade" mode="out-in">
      <router-view name="normal"/>
    </transition>
  
  </div>
</template>

<script>

export default {
    data () {
        return {
            scrollTag: false,
            timer: null,
            scroll: '',
            top: 150,
            speed: 100,
            componentScrollBar: null
        }
    },
    components: {

    },
    created () {
    },
    mounted () {
        this.scrollTop()
        window.document.addEventListener('scroll', this.scrollTop)
    },
    destroyed () {
    },
    methods: {

        scrollTop () {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop > 500) {
                this.scrollTag = true
            } else {
                this.scrollTag = false
            }
        }
    }
}
</script>

<style lang="scss"  scoped>
@import '~styles/base.scss';
.layout-normal{
    @include responsive-default {
      height: 100vh;
    }
}
</style>
