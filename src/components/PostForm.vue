<template>
  <form action="" @submit.prevent = "submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Create post</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "PostForm",
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapActions(['addPost']),
    submit() {
      let obj = {
        title: this.title,
        body: this.body,
        id: Date.now()
      }
      this.addPost(obj);
      this.title = this.body = '';
    }
  }
}
</script>

<style lang="scss">
@keyframes explore {
  from {
    transform: scale(1);
    box-shadow: 0 0 3px 3px antiquewhite, 0 0 6px 6px  #cec5bb;
    opacity: 1;
  }
  to {
    transform: scale(1.4);
    box-shadow: 0 0 3px 3px antiquewhite, 0 0 6px 6px  #cec5bb;
    opacity: 0;
  }
}
form {
  width: 100%;
  input {
    display: block;
    width: 100%;
    border: 1px solid black;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    display: flex;
    margin: 0 auto;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background-color: antiquewhite;
    text-transform: uppercase;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 8px;
      background-color: transparent;
      transition: all 4s linear;
    }
    &:hover::before {
      animation: explore 1s 0.15s linear;
    }
  }
}

</style>