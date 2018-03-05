import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getters'
import * as actions from './actions'
import { state, mutations } from './mutations'

import message from './modules/message'
import warn from './modules/warn'
import friend from './modules/friend'
import person from './modules/personal'
import classInfo from './modules/dynamic'
import tips from './modules/tips'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    message,
    warn,
    friend,
    person,
    classInfo,
    tips
  }
})

export default store
