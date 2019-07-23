import 'es6-promise/auto'
import Vue from 'vue'
Vue.config.productionTip = false
import store from './store/sotre'
import App from './ToDoList.vue'



new Vue({
  render: h => h(App),
  store
}).$mount('#app')
