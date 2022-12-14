<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/Logo.2.png">
    <div class="opening">
      <h2>Your online closet</h2>
      <p>where we catter for ladies, gentlement and the young ones</p>
    </div>
    <!-- <HelloWorld msg=""/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home img{
  width: 7rem;
}
.opening{
  font-size: 22px;
  color: #7CFC00;
}
</style>
