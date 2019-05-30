<template>
  <div id="products">
    <ul>
      <li :key="i" v-for="(product, i) in products">
        <section class="left">
          <label>
            <input
              class="checkProduct"
              :checked="product.status"
              @change="
                setProductStatus(product.id, $event.target.checked, 'status')
              "
              type="checkbox"
            />
          </label>
          <p :class="{ checked: product.status }">
            <strong>{{ product.name | capitalize }}</strong>
          </p>
        </section>
        <section class="right">
          <label>
            <input
              :value="product.quantity"
              @input="
                setProductQuantity(product.id, $event.target.value, 'quantity')
              "
              type="number"
            />
          </label>
          <button @click="deleteProduct(product.id)" type="button">x</button>
        </section>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductsTable",
  data: () => ({
    addedProductName: ""
  }),
  props: {
    products: { type: Array }
  },
  methods: {
    deleteProduct(id: string) {
      this.$store.commit("products/DELETE_PRODUCT", id);
    },
    setProductQuantity(key: string, currentQuantity: string, name: string) {
      this.$store.dispatch("products/setProductInfos", {
        key: key,
        quantity: currentQuantity,
        value: name
      });
    },
    setProductStatus(key: string, status: boolean, name: string) {
      this.$store.dispatch("products/setProductInfos", {
        key: key,
        status: status,
        value: name
      });
    }
  }
});
</script>
