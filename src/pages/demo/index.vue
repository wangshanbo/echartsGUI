<template>
<section class="row saas-demo">
    <div class="ws-tooltip-bottom">
        <span class="tooltiptext">UI demo</span>
    </div>
    <el-dropdown split-button type="primary">
      默认尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</section>

</template>

<script>
export default {
    name: 'demo',
    metaInfo: {
        title: '示例'
    },
    data () {
        return {
            value: ''
        };
    },
    created () {},
    computed: {},
    watch: {},
    mounted () {},
    methods: {
        change (v) {
            console.log(v);
        },
        changeSelect () {
            this.value = '选项2';
        }
    },
    components: {}
};
</script>

<style lang="scss"  scoped >
@import "~styles/base.scss";
.saas-demo {
  margin-top: 67px;
}
</style>
