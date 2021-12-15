const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Basit',
    selecetdImg:0,
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage:
          'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage:
          'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
        this.selecetdImg= index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image(){
        return this.variants[this.selecetdImg].variantImage
    }
  },
});
