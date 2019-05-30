<template>
  <ListComponent />
</template>

<script lang="ts">
import Vue from "vue";
import ListComponent from "../components/TodoList.vue";
export default Vue.extend({
  components: {
    ListComponent
  }
});
</script>
