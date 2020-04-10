<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>

	<div class="row">
		<form v-on:submit.prevent="updateEmployee" class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<input disabled type="text" v-model="employee_id" required>
					<label class="active">Employee ID#</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="name" required>
					<label class="active">Name</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="dept" required>
					<label class="active">Department</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input type="text" v-model="position" required>
					<label class="active">Position</label>
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
	name: 'EditEmployee',
	data () {
		return {
			employee_id:null,
			name:null,
			dept:null,
			position:null
		}
	},
  // lifecycle.. 
	beforeRouteEnter(to, from, next){

		db.collection('employees').where('employee_id','==',to.params.employee_id).get()
		.then( querySnapshot => {
			querySnapshot.forEach( doc => {
				next(vm => {
					vm.employee_id = doc.data().employee_id;
					vm.name = doc.data().name;
					vm.dept = doc.data().dept;
					vm.position = doc.data().position;
				});
			});
		})
		.catch( error => {

		})
	},

	methods:{

		updateEmployee:function(){
			db.collection('employees').where('employee_id','==', this.$route.params.employee_id ).get()
			.then( querySnapshot => {
				querySnapshot.forEach( doc => {
					doc.ref.update({
						employee_id:this.employee_id,
						name:this.name,
						dept:this.dept,
						position:this.position
					});
				});
			})
			.then(()=>{
				this.$router.push({name:"ViewEmployee", params:{employee_id:this.employee_id}});
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
