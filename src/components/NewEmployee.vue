<template>
  <div id="new-employee">
	<h3>New Employee</h3>

	<div class="row">
		<form v-on:submit.prevent="saveEmployee" class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="employee_id" required>
					<label>Employee ID#</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="name" required>
					<label>Name</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="dept" required>
					<label>Department</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="position" required>
					<label>Position</label>
				</div>
			</div>
			<button type="submit" class="btn">Submit</button>
			<router-link to="/" class="btn grey">Back</router-link>
		</form>
	</div>

  </div>
</template>

<script>

import db from '@/firebase-init';

export default {
  name: 'NewEmployee',
  data () {
	return {
		employee_id:null,
		name:null,
		dept:null,
		position:null
	}
  },
  methods:{
	saveEmployee:function(){

		db.collection('employees').add({
			employee_id:this.employee_id,
			name:this.name,
			dept:this.dept,
			position:this.position
		})
		.then( docRef => this.$router.push('/'))// redirect home
		.catch( error => console.log(error) )
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
