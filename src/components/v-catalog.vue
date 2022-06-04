<template>
<div class="v-catalog">
  <h1>Catalog</h1>
  <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @sendArticle="showChildArticleInConsole"
  />
</div>
</template>
<script>
import  vCatalogItem from './v-catalog-item';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticleInConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('DATA arrived!')
      }
    })
  }
}

</script>

<style lang="scss">
.v-catalog {
  h1 {
    background-color: aliceblue;
    text-align: center;
    width: inherit;
  }
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>