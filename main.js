let product = "Socks";
let app = new Vue ({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Warm fuzzy socks for the cold weather',
    image: "./assets/images/vmSocks-green-onWhite.jpg",
    altText: "A pair of socks",
    link: "https://www.vuemastery.com/courses",
    inStock: true,
    inventory: 150,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2234,
        variantColor: "blue"
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
  }
})