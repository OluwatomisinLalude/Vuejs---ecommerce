/* Now, we don't want all of our data, methods, computed properties living in the root instance of Vue.
** Over time, it will become unmanageable. This gives rise to Components
*/

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
      <div class="product-image">
        <!--Data binding. Can use v-bind: for long-->
        <img :src="image" :alt="altText" />
        <a :href="link">
      </div>

      <div class="product-info">
        <!--Expression that takes data from Vue Instance-->
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <!--Conditional rendering-->
        <p v-if="inventory > 10>">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else  :class="{ lineThrough }">Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div class="color-box"
             v-for="(variant, index) in variants" 
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)"
             ></div>
        <ul v-for="size in sizes">
          <li>{{ size }}</li>
        </ul>
        <p>Shipping: {{ shipping }}</p>
      </div>

      <div class="cart">
        <p>Cart ({{ Cart }})</p>
      </div>
      <!--Shorthand for v-on is @-->
      <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >Add to cart</button>
      <button v-on:click="removeFromCart"
              :disabled="cart"
              :class="{ disabledButton: cart }"
              >Remove from cart</button>
  </div>
  `,
  data() {
    return {
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
    }
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
    },
    shipping() {
      if(this.premium) {
        return 'Free'
      }
      return 9.99
    }
  }
})

let app = new Vue ({
  el: '#app',
  data: {
    premium: true
  }
})