<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/'+ product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price}} P.</p>
    <button
        class="v-catalog-item__name__btn btn"
        @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  },
}
</script>

<style lang="scss">
@import "src/assets/styles/variables";
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 rgba(70,70,70,0.2);
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: 100px;
  }

}
</style>