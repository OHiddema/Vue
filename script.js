Vue.component('product', {
   props: {
      premium: {
         type: Boolean,
         default: true
      }
   },
template: `
<div class='product'>
<div class='product-image'>
   <img :src="image" alt="socks">          
</div>
<div class='product-info'>
   <h1>{{ title }}</h1>
   <p v-if="inStock">In Stock</p>
   <p v-else :class="{ outOfStock: !inStock }">Out Of Stock</p>
   <p>{{ onSaleMsg }}</p>
   <p>Shipping: {{ shipping }}</p>
   <ul>
      <li v-for="detail in details">{{ detail }}</li>
   </ul>
   <div v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)">
   </div>
   <button v-on:click="addToCart"
           :disabled="!inStock"
           :class="{ disabledButton: !inStock }">Add to cart</button>
   <div class='cart'>
      <p>Cart({{cart}})</p>
   </div>
</div>
</div>
`,
data() {return {
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
}} ,
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
   },
   shipping() {
      return (this.premium) ? "Free" : "2.99"
   }
}

})

var app = new Vue ({
   el: '#app',
   data: {
      premium: true
   }
})