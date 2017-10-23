<template>
  <div class="Home">
    <div class="container">
      <div class="col-sm-8">
        <div class="jumbotron">
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="col-sm-4">
        <div class="jumbotron">
          <h2>欢迎你！</h2>
          <p>这里有你需要的app</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
