<template>
  <div class="v-cart-item">
    <img class="v-cart-item_img" :src=" require('../assets/images/'+ cart_item_data.image)" alt="">
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Количество</p><span
        class="btnQ"
        @click="decrement"
    >-</span>
      {{ cart_item_data.quantity }}
      <span
          class="btnQ"
          @click="increment"
      >+</span>
    </div>
    <button class="del" @click="deleteFromCart">Delete</button>
  </div>

</template>

<script>

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        {
          return {}
        }
      },
    }
  },
  mounted() {
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    increment() {
      this.$emit('increment')

    },
    decrement() {
      this.$emit('decrement')
    }
  },
}
</script>

<style lang="scss">
.v-cart-item {
  width: 40%;
  margin: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px 5px rgba(70, 70, 70, 0.4);

  & > * {
    margin: 0 10px;
  }
}

.v-cart-item_img {
  max-width: 50px;
}

.btnQ {
  font-size: 20px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: red;
  }
}
</style>