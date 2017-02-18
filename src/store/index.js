/*
* @Author: Administrator
* @Date:   2017-02-17 17:08:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 14:12:01
*/

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
   state:{
      count:0,
      todos:[
         { id:1, text:'...',done:true },
         { id:2, text:'...',done:false}
      ]
   },
   mutations: {
     increment(state){
        state.count ++
     }
   },
   getters:{
      doneTodos: state => {
         return state.todos.filter(todo => todo.done)
      }
   },
   actions: {
      increment (context) {
          context.commit('increment')
      }
   }
})

export default store
