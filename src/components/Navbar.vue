<template>
  <nav id="navbar">
	<div class="nav-wrapper green">
		<div class="container">
			<router-link to="/" class="brand-logo">
				{{appTitle}}
			</router-link>
		</div>
	</div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props:{
  	appTitle: String
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
