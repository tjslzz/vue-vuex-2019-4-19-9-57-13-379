import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let id = 0;
let get_id = () => {
    return id++;
};
let filters = {
  0:()=>true,
  1:()=>true,
  2: item => !item.checked,
  3: item => item.checked
}
export default new Vuex.Store({
    state:{
      items:[],
      model:0,
    },
    getters:{
      getList:function(state){
        return function(){
          return state.items.filter(filters[state.model]);
        }
      },
      getModel:function(state){
        return function(){
          return state.model;
        }
      },
    },
    mutations:{
      push(state,item){
        state.items.push({id: get_id(),checked: false,value: item})
      },
      setModel(state,model){
        state.model = model;
      }
    }
  })