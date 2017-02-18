<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg.a }}</h1>

    <p>
       <router-link to="/foo">Go to Foo</router-link>
       <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
<!--     <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <counter></counter>


  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
const Counter ={
   template:`<div >{{ count }} </div>`,

   computed:{
      count() {
          return this.$store.state.count
      }
   }
}


export default {
  name: 'app',
  data () {
    return {
      msg: { a:'Hello Vue!' },
      parentMsg:'Message frome parent',
      total:0
    }
  },
  components: { Counter },
  methods: {
    incrementTotal: function(){
      this.total +=1;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
