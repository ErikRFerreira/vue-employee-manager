<template>
	<nav id="navbar">
	<div class="nav-wrapper green">
		<div class="container">
			<router-link to="/" class="brand-logo left">
				{{appTitle}}
			</router-link>
			<ul class="right">
				<li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
				<li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
				<li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
				<li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
			</ul>
		</div>
	</div>
	</nav>
</template>

<script>

import firebase from 'firebase';

export default {
	name: 'Navbar',
	props:{
		appTitle: String
	},
	data () {
		return {
			isLoggedIn: false,
			currentUser: false
		}
	},
	created(){
		// check if user is logged in
		let currentUser = firebase.auth().currentUser;
		if( currentUser ){
			this.isLoggedIn = true;
			this.currentUser = currentUser;
		}

	},
	methods:{
		logout:function(){
			firebase.auth().signOut()
			.then( () => {
				this.$router.push('/login')
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
