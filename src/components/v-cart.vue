<template>
  <h2>Cart</h2>
  <router-link to="/">
    <div class="v-catalog__link">Back to Catalog</div>
  </router-link>
  <div class="v-cart">
  <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart ='deleteFromCart(index)'
      @increment="increment(index)"
      @decrement="decrement(index)"
  />
    <div class="total">Total: <span class="total__sum">{{cartTotalCost}}</span></div>
  </div>
</template>

<script>
import  vCartItem from './v-cart-item'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })

        return result
      } else {
        return  0;
      }

    }
  },
  mounted() {
  },
  methods: {
    ...mapActions([
        'DELETE_DROM_CART',
        'INCREMENT',
        'DECREMENT'
    ]),
    deleteFromCart(index) {
      this.DELETE_DROM_CART(index)
    },
    increment(index) {
      this.INCREMENT(index)
    },
    decrement(index) {
      this.DECREMENT(index)
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}
.total {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  padding: $padding*3;
  justify-content: center;
  background-color: #6ca277;
  color: white;
  text-transform: uppercase;
  align-items: center;
  &__sum {
    font-size: 27px;
    margin-left: 30px;
  }
}
</style>