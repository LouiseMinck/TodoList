import Vue, { VueConstructor } from "vue";

export default {
  install(Vue: VueConstructor) {
    Vue.mixin({
      filters: {
        capitalize: function(value: string) {
          if (!value) return "";
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      }
    });
  }
};
