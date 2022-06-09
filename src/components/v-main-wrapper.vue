<template>
  <router-view/>
</template>

<script>
import {mapGetters} from 'vuex'
// import vCatalog from './v-catalog'


export default {
  name: "v-main-wrapper",
  components: {
    // vCatalog,
  },
  props: {},
  data() {
    return {
      title: 'Main Wrapper'
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {

  },
  watch: {

  },

}
</script>

<style lang="scss">
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>