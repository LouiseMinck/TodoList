const uuidv1 = require("uuid/v1");

export default {
  namespaced: true,
  state: {
    products: []
  },
  actions: {
    addProduct({ commit }: any, product: any) {
      let newProduct = {
        id: uuidv1(),
        idList: product.idList,
        name: product.name,
        quantity: 1,
        status: false
      };
      commit("ADD_PRODUCT", newProduct);
    },
    setProductInfos({ commit, state }: any, productInfos: any) {
      let currentProduct = state.products
        .filter((product: any) => product.id === productInfos.key)
        .pop();
      currentProduct[productInfos.value] = productInfos[productInfos.value];
      commit("SET_PRODUCT_INFOS", {
        currentProduct: currentProduct,
        value: productInfos.value
      });
    }
  },
  mutations: {
    SET_PRODUCTS(state: any, products: any) {
      state.products = products;
    },
    ADD_PRODUCT(state: any, newProduct: any) {
      state.products.push(newProduct);
      localStorage.Products = JSON.stringify(state.products);
    },
    DELETE_PRODUCT(state: any, id: string) {
      state.products = state.products.filter(
        (product: any) => product.id != id
      );
      localStorage.Products = JSON.stringify(state.products);
    },
    DELETE_PRODUCTS_LIST(state: any, idList: string) {
      state.products = state.products.filter(
        (product: any) => product.idList != idList
      );
      localStorage.Products = JSON.stringify(state.products);
    },
    SET_PRODUCT_INFOS(state: any, data: any) {
      state.products.forEach((product: any) => {
        if (product.id === data.currentProduct.id) {
          product[data.value] = data.currentProduct[data.value];
        }
      });
      localStorage.Products = JSON.stringify(state.products);
    }
  },
  getters: {
    products(state: any) {
      return state.products;
    },
    product(state: any) {
      return (id: any) =>
        state.products.filter((product: any) => {
          return product.idList === id;
        });
    }
  }
};
