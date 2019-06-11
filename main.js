let product = "Socks";
let app = new Vue ({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Warm fuzzy socks for the cold weather',
    image: "./assets/images/vmSocks-green.jpg",
    altText: "A pair of socks",
    link: "https://www.vuemastery.com/courses",
    inStock: true,
    inventory: 150,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/images/vmSocks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/images/vmSocks-blue.jpg",
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1;
      if (cart === 0) {
        cart = 0;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
})