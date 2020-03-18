import Vue from 'vue';
import Vuex from 'vuex';
import page from './page';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 1,
  },

  modules: {
    page,
  },
});
