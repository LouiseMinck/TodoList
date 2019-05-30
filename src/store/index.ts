import Vue from "vue";
import Vuex from "vuex";
import lists from "./lists";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lists: lists,
    products
  }
});
