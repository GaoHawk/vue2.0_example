import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import Foo from './component/foo.vue'
import Vuex from 'vuex'

Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.filter("uniformChat",function(value){
     var str1 = decodeURI(value).split('/')[1];
     var json = eval('(' + str1 + ')');
     console.log(json);
     return json.name;
});

const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

Vue.component('child',{
   props:['initialCounter'],
   template: '<span>{{ counter }} </span>',
   data:function(){
      return { counter: 0}
   }
})
const store = new Vuex.Store({
     state:{
        count:0
     },
     mutations: {
        increment(state) {
            state.count++
        }
     }
})
store.commit('increment')
console.log(store.state.count)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
