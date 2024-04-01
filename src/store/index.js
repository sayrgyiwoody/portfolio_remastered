import { createStore } from 'vuex'

export default createStore({
  state: {
    currentSection : 'home',
  },
  getters: {
    getCurrentSection(state) {
      return state.currentSection;
    }
  },
  mutations: {
    setCurrentSection(state, section) {
      state.currentSection = section;
    }
  },
  actions: {
    setCurrentSection({ commit }, section) {
      commit('setCurrentSection', section);
    }
  },
  modules: {
  }
})