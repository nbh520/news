import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutation from './mutations'
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutation,
  actions
})
