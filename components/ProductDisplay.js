app.component('product-display', {
  template:
    `<div id="productPage">
    <img v-bind:src="selectedVariant.image" class="productImg" ref="productImg">
    <div id="productInfo">
        <h1>{{name}}</h1>
        <h3 v-if="this.selectedVariant.quantity > 0">In stock: {{this.selectedVariant.quantity}}</h3>
        <h3 v-else style="color: red;">Out of stock</h3>
        <h3>Price: {{price}}</h3>
        <h3>Shipping: {{shipping}}</h3>
        <div id="variantsContainer">
            <h3>Variants: </h3>
            <div class="variantCircle" v-on:click="selectVariant(variant)" v-for="(variant, index) in variants" :key="variant.id" :style="{backgroundColor: variant.color}"></div>
        </div>
        <button v-bind:class="{addToCartButton: true, addToCartButtonDisabled: !this.selectedVariant.quantity > 0}" v-on:click="addToCart(this.selectedVariant.quantity > 0)">Add to Cart</button>
    </div>
    </div>`
  ,
  props: [
    'name',
    'price',
    'shipping'
  ],
  data() {
    return {
      selectedVariant: {},
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
      ]
    }
  },
  methods: {
    addToCart(inStock) {
      if (inStock) {
        this.$emit('addToCart')
      }
    },
    selectVariant(v) {
      this.selectedVariant = v
    }
  },
  mounted() {
    this.selectedVariant = this.variants[0]
  }
})