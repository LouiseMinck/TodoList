<template>
  <div id="app">
    <div id="nav">
      <div>
        <h1>Shopping List.</h1>
        <div class="space_M"></div>
        <button id="addList" @click="addList">New list +</button>
      </div>
      <div id="chooseList">
        <router-link
          v-for="(list, i) in lists"
          :key="i"
          :to="{ name: 'list', params: { id: list.id } }"
          class="listing"
          >{{ list.name }}</router-link
        >
      </div>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    if (localStorage.Lists) {
      this.$store.commit("lists/SET_LISTS", JSON.parse(localStorage.Lists));
    }
  },
  computed: {
    lists() {
      return this.$store.getters["lists/lists"];
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("lists/addList", "Your list");
    }
  }
});
</script>

<style lang="scss">
@import "assets/main.scss";
</style>
