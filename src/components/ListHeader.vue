<template>
  <div id="infoslist">
    <div>
      <label>
        <input
          :value="listName"
          class="listName"
          type="text"
          @change="setListName($event.target.value)"
        />
      </label>
      <slot></slot>
    </div>
    <button class="removeBtn" @click="deleteList()" type="button">
      Remove list
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ListHeader",
  props: {
    listId: { type: String },
    listName: { type: String }
  },
  methods: {
    setListName(newListName: string) {
      this.$emit("update:listName", newListName);
      this.$store.dispatch("lists/setListName", {
        key: this.listId,
        name: newListName
      });
    },
    deleteList() {
      this.$store.commit("lists/DELETE_LIST", this.listId);
      this.$store.commit("products/DELETE_PRODUCTS_LIST", this.listId);
      this.$router.push("/");
    }
  }
});
</script>
