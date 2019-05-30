<template>
  <div id="addProduct">
    <div id="formAddProduct">
      <label class="labelAddProduct">
        Add product :
        <input
          v-model="addedProductName"
          @keypress.enter="addProduct()"
          type="text"
        />
      </label>
      <button
        class="addBtn"
        @click="addProduct(addedProductName)"
        type="button"
      >+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddProduct",
  data: () => ({
    addedProductName: ""
  }),
  props: {
    idList: { type: String }
  },
  methods: {
    addProduct() {
      this.$store.dispatch("products/addProduct", {
        idList: this.idList,
        name: this.addedProductName
      });
      this.addedProductName = "";
    }
  }
});
</script>
