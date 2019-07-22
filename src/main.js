let id = 0;
let get_id = () => {
    return id++;
}
import Vue from 'vue'
import App from './ToDoList.vue'
import 'es6-promise/auto'
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    items:[]
  },
  getters:{
    getList:function(state){
      return function(){
        return state.items;
      }
    }
  },
  mutations:{
    push(state,item){
      state.items.push({id: get_id(),checked: false,value: item})
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
