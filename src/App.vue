<template>
  <div id="app">
    <navbar appTitle="Employee Manager"></navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components:{
    navbar:Navbar
  }
}
</script>

<style>

</style>
