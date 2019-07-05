var myViewInstance = new Vue ({
   el: '#app',
   data: {
      number: 'Socks',
      image: 'assets/vmSocks-green-onWhite.jpg',
      link: 'https://www.google.com',
      inventory: 0,
      onSale: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
         {
            variantId: 1,
            variantColor: "green"
         },
         {
            variantId: 2,
            variantColor: "blue"
         }
      ],
      cart: 0
   },
   methods: {
      addToCart: function() {
         this.cart += 1;
      }
   }
})