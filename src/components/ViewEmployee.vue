<template>
  <div id="view-employee">
	<ul class="collection with-header">
		<li class="collection-header"><h4>{{name}}</h4></li>
		<li class="collection-item">Employee ID#: {{employee_id}}</li>
		<li class="collection-item">Department: {{dept}}</li>
		<li class="collection-item">Position: {{position}}</li>
	</ul>
	<router-link to="/" class="btn grey">Back</router-link>
	<button class="btn red" v-on:click="deleteEmployee">Delete</button>
  
	<div class="fixed-action-btn">
		<router-link v-bind:to="{name:'EditEmployee', params:{ employee_id: employee_id } }" class="btn-floating btn-large red">
			<i class="fa fa-pencil"></i>
		</router-link>
	</div>

  </div>

</template>

<script>

import db from '@/firebase-init';

export default {
	name: 'ViewEmployee',
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

	},

	methods:{

		deleteEmployee:function(){

			db.collection('employees').where('employee_id','==', this.$route.params.employee_id ).get()
			.then( querySnapshot => {
				querySnapshot.forEach( doc => {
					doc.ref.delete();
					this.$router.push('/');
				});
			})

		}

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
