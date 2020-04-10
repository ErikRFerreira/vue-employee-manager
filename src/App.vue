<template>
  <div id="app">
    <!-- 
         v-on:key="$route.fullPath" re-renders the navbar on login/logout
      -->
    <navbar v-on:key="$route.fullPath" appTitle="Employee Manager"></navbar>
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
