
let app = new Vue ({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    description: 'Warm fuzzy socks for the cold weather',
    altText: "A pair of socks",
    link: "https://www.vuemastery.com/courses",
    inventory: 150,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/images/vmSocks-green.jpg",
        variantQuantity: 20,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/images/vmSocks-blue.jpg",
        variantQuantity: 2,
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    cart: 0,
    selectedVariant: 0,
    onSale: true,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
      if (cart === 0) {
        cart = 0;
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale'
      }
        return this.brand + ' ' + this.product + ' are not on sale'
    }
  }
})