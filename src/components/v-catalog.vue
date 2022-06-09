<template>
<div class="v-catalog">
  <router-link  :to="{name: 'cart'}">
    <div class="v-catalog__link">Cart: {{CART.length}}</div>
  </router-link>
  <h1>Catalog</h1>
  <v-catalog-item
      v-for="product in getArticle"
      :key="product.article"
      :product_data="product"
      @addToCart = "addToCart"
  />
</div>
</template>
<script>
import  vCatalogItem from './v-catalog-item'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  computed:  mapGetters(['getArticle', 'CART']),
  methods: {
    ...mapActions(['GET_ARTICLE_FROM_DB', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
   this.GET_ARTICLE_FROM_DB()
  }
}
</script>

<style lang="scss">
.v-catalog {
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  h1 {
    background-color: aliceblue;
    text-align: center;
    width: inherit;
  }
}

</style>