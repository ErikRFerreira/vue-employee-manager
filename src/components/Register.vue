<template>
	<div id="register">
		
		<div class="container">

			<div class="row">
				<br>
				<br>
				<div class="col s12 m10 offset-m1">
					<div class="login card-panel">
						<h3>Register</h3>
						
						<form v-on:submit.prevent="register">
							<div class="input-field">
								<input type="text" v-model="email" id="email" required>
								<label>Email</label>
							</div>
							<div class="input-field">
								<input type="password" v-model="password" id="password" required>
								<label>Password</label>
							</div>

							<span v-if="error">
								<div  class="red darken-3" style="color: rgba(255, 255, 255, 0.9);">
									<span>{{error}}</span>
								</div>
								<br>
							</span>

							<button class="btn btn-large grey lighten-4 black-text">Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	

	</div>
</template>

<script>

import firebase from 'firebase';

export default {
	name: 'Register',
	data () {
		return {
			email:"",
			password:"",
			error:null
		}
	},
	methods:{

		register:function(){
			
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then( user => {
				alert(`User created for ${user.user.email}`);
				this.$router.push('/');
			})
			.catch(error => {
				this.error = error.message
			})

		}

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
