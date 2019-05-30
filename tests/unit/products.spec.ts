import storeProducts from "@/store/products";
const uuidv1 = require("uuid/v1");

const { mutations } = storeProducts;

describe("mutations", () => {
  it("addProduct", () => {
    let newProduct = {
      id: uuidv1(),
      idList: 1,
      name: "test",
      quantity: 1,
      status: false
    };
    const state = {
      products: []
    };
    for (let i = 0; i <= 4; i++) {
      mutations.ADD_PRODUCT(state, newProduct);
    }
    expect(state.products.length).toEqual(5);
  });
});
