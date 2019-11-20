import Vue from 'vue'
import Vuex from 'vuex'
import proyectos from '../data/proyectos.js'
import habilidades from '../data/habilidades.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	proyectos,
  	habilidades
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
