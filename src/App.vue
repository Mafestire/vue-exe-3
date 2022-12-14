<template>
  <Navbar />
  <router-view />

  <Foot />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Foot from './components/Foot.vue'

export default {
components: {Navbar,Foot},
  
}
</script>

<style>

</style>

