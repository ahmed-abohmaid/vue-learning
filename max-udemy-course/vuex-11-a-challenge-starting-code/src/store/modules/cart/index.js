export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    addProductToCart({ cart }, { productData }) {
      const productInCartIndex = cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        cart.items.push(newItem);
      }
      cart.qty++;
      cart.total += productData.price;
    },

    removeProductFromCart({ cart }, { prodId }) {
      const productInCartIndex = cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = cart.items[productInCartIndex];
      cart.items.splice(productInCartIndex, 1);
      cart.qty -= prodData.qty;
      cart.total -= prodData.price * prodData.qty;
    },
  },
};
