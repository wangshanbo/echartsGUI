<template>
  <div id="_ws">
    <ws-loading ref="loading"></ws-loading>
    <keep-alive>
      <component v-if="layout" :is="layout"></component>
    </keep-alive>
  </div>
</template>

<script>
import WsLoading from '~/framework/components/loading'
import { mapState } from 'vuex'
import _ from 'lodash'
import Application from '~/framework/gen/index'
import convert from '~/framework/gen/convert'
import compose from '~/framework/gen/compose'
<%
  let [mwsList, mwsStr]= [[], '']
  mws.forEach((mw, i)=>{
%>
import mw<%= i%> from '<%= mw%>'
<%
    mwsList.push({key: mw, value: `mw${i}`})
  })
  // mwsStr = mwsList.join(',')
%>
<%
  cssGlo.forEach((css, i)=>{
%>
import '<%= css%>'
<%
  })
%>
<%
let lysStr = ''
  layouts.forEach((ly, i)=>{
    lysStr += `${i?'\t':''}_${ly.name}: () => import('${ly.path}' /* webpackChunkName: '${ly.path}' */).then(m => m.default || m),\n`
  })
%>

<%
let mwMapStr = ''
  mwsList.forEach((mw, i)=>{
    mwMapStr += `${i?'\t\t\t':''}'${mw.key}': ${mw.value}${i == mwsList.length-1? '': ','}${i == mwsList.length-1? '': '\n'}`
  })
%>

let layouts = {
  <%= lysStr%>
}
export default {
  name: 'app',
  data () {
    return {
      layoutName: '',
      layout: null
    }
  },
  beforeCreate () {
  },
  created () {
    const mwMap = {
      <%= mwMapStr%>
    };
    let self = this;
    window._ws['router'] = this.$router;
    self.$router.beforeResolve((to, from, next) => {
      let matchVues = self.$router.getMatchedComponents(to)
      let funParams = {
        to: to, from: from, next: next, store: this.$store
      }
      let lt = to.meta ? to.meta.layout || 'default' : 'default';

      let nextLayout = ()=> {
        // debugger
        self.initLayout(matchVues.length ? lt ? lt: 'default' : 'default')
        .then(()=>{
          let self1 = this;
          let self = matchVues[0];
          let customeLoadingInstance = null;
          if(typeof self.loading === 'function' || typeof self.loading === 'object') {
            customeLoadingInstance = self.loading(self1);
          } else {
            this.$ws.loading.start()
          }
          if (typeof self.fetchData === 'function') {
            self.fetchData.call(this, to, from, self1)
            .then(()=>{
              if(customeLoadingInstance) {
                customeLoadingInstance.close();
              } else {
                this.$ws.loading.finish()
              }
            })
          } else {
            setTimeout(()=>{
              if(customeLoadingInstance) {
                customeLoadingInstance.close();
              } else {
                this.$ws.loading.finish()
              }
            }, 0);
          }
          next()
        })
      };
      let steps = [];
      _.forEach(to.meta.middleware, (path)=> {
        steps.push(mwMap[path]);
      });
      steps.push(nextLayout);

      let gapp = new Application();

      _.forEach(steps, (mwF)=> {
        gapp.use(mwF);
      });
      let boot = compose(gapp.middleware);
      // debugger
      boot(funParams);
      
    
    })
  },
  mounted () {
    this.$loading = this.$refs.loading
    this.$ws.loading = this.$loading
  },
  computed: {
    ...mapState({
      // layout: state => state.layout,
      // layoutName: state => state.layoutName
    })
  },
  methods: {
    initLayout (layoutName) {
      return new Promise((resolve, reject)=>{
        let currentLayoutName = this.layoutName
        if (layoutName !== currentLayoutName) {
          this.loadLayout(layoutName).then(()=>{
            this.setLayout(layoutName)
            resolve()
          })
        } else {
          resolve()
        }
      })
    },
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return new Promise((resolve, reject)=>{
        layouts[_layout]()
        .then((Component) => {
          layouts[_layout] = Component
          resolve(layouts[_layout])
        })
        .catch((e) => {
        })
      });
    },
    checkAuth (routerName) {
      if (metaDic[routerName].requireAuth) {
        return checkLogin()
      } else {
        return true
      }
      
    },
    checkRouterExist (path) {
      return this._getNameByPath(path)
    },
    _getNameByPath (routerPath) {
      let routers = this.$router.options.routes
      let name = _.find(routers, function (r) {
        return r.path === routerPath
      })
      return !!name ? name.name : null
    }

  },
  components: {
    WsLoading
  }
}
</script>

