<template>
  <div id="list">
    <div v-if="list">
      <ListHeader :listName.sync="list.name" :listId="list.id">
        <aside class="date">Created : {{ list.date | moment("calendar") }}</aside>
      </ListHeader>
      <ProductsTable :products="products"></ProductsTable>
      <div class="space_S"></div>
    </div>
    <AddProduct :idList="list.id"></AddProduct>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductsTable from "../components/ProductsTable.vue";
import AddProduct from "../components/AddProduct.vue";
import ListHeader from "../components/ListHeader.vue";

Vue.use(require("vue-moment"));

export default Vue.extend({
  name: "ListComponent",
  data: () => ({
    currentList: {}
  }),
  components: {
    ProductsTable,
    AddProduct,
    ListHeader
  },
  mounted() {
    if (localStorage.Products) {
      this.$store.commit(
        "products/SET_PRODUCTS",
        JSON.parse(localStorage.Products)
      );
    }
  },
  computed: {
    products() {
      return this.$store.getters["products/product"](this.$route.params.id);
    },
    list() {
      return this.$store.getters["lists/list"](this.$route.params.id);
    }
  }
});
</script>
