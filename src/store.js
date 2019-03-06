import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFormItemId: null,
    dragFormItem: null
  },
  mutations: {
    ACTIVE_FORMITEM_ID(state, res) {
      state.activeFormItemId = res
    },
    DRAG_FORMITEM(state, res) {
      state.dragFormItem = res
    }
  },
  actions: {

  }
})
