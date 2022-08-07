const app = Vue.createApp({
  data() {
    return {
      message: 'Hello World',
      cartQuantity: 0
    }
  },
  methods: {
    addToCart() {
      this.cartQuantity++
    }
  }
})