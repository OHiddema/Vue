var app = new Vue ({
   el: '#app',
   data: {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
         {
            variantId: 1,
            variantColor: "green",
            variantImage: "assets/vmSocks-green-onWhite.jpg",
            variantQuantity: 10,
            onSale: true
         },
         {
            variantId: 2,
            variantColor: "blue",
            variantImage: "assets/vmSocks-blue-onWhite.jpg",
            variantQuantity: 0,
            onSale: false
         }
      ],
      cart: 0
   },
   methods: {
      addToCart: function() {
         this.cart += 1;
      },
      updateProduct: function(index) {
         this.selectedVariant = index;
      },
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product;
      },
      image() {
         return this.variants[this.selectedVariant].variantImage;
      },
      inStock() {
         return this.variants[this.selectedVariant].variantQuantity;
      },
      onSaleMsg() {
         return (this.variants[this.selectedVariant].onSale) ? this.brand + ' ' + this.product + " on sale!" : "No sale!";
      }
   }
})