<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vulog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#">Home</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h5>Front 블로그</h5>
    <p>- Make Vue -</p>
  </div>

  <ListVue :blogPost="blog"/>

</template>

<script>
import ListVue from './components/ListVue.vue'
import blogWrite from './assets/blogWrite'

export default {
  name: 'App',
  data(){
    return{
      blog: blogWrite,
    }
  },
  components: {
    ListVue: ListVue,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
