import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        letter:'',
        city:localStorage.getItem('city')||'长沙'
    },
    mutations:{
        changeletter(state,letter){
            state.letter = letter
        },
        changecity(state,city){
            state.city = city
            localStorage.setItem('city',city)
        }
    }
})