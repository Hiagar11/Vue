<template>
  <div id="app">
    <PostForm/>
    <h1>{{postsCount}}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import PostForm from "./components/PostForm";
export default {
  name: 'App',
  components: {
    PostForm
  },
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  mounted() {
    this.fetchPosts(12);
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  width: 90%;
}
h1 {
  width: 100%;
  text-align: center;
}
.post {
  display: flex;
  flex-direction: column;
  margin: 8px;
  flex-basis: 20%;
  box-shadow: 5px 5px 10px rgba(70,70,70, 0.2);
  padding: 10px;
  order: 2;
  h2 {
    order: -1;
    text-align: center;
  }
  &::before {
    content: '';
    border: 1px solid rgba(70,70,70, 0.6);
    order: 0;
    align-self: stretch;
  }
}
</style>
