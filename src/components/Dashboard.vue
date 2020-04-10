<template>
  <div id="dashboard">
    
    <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>
      <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}} : {{employee.name}}
        <router-link v-bind:to="{name:'ViewEmployee', params:{ employee_id: employee.employee_id } }" class="secondary-content">
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
  

  
    <div class="fixed-action-btn">
    	<router-link to="/new" class="btn-floating btn-large red">
    		<i class="fa fa-plus"></i>
    	</router-link>
    </div>
  
  </div>
</template>

<script>

import db from '@/firebase-init';

export default {
  name: 'Dashboard',
  data () {
    return {
      employees:[]
    }
  },
  created(){
    db.collection('employees').orderBy('dept').get()
    .then( rows => {
      rows.forEach( row => {
        const data = {
          'id': row.id,
          'employee_id': row.data().employee_id,
          'name': row.data().name,
          'dept': row.data().dept,
          'position': row.data().position
        }
        this.employees.push(data);
      });
    })
    .catch( error => {
      console.log(error);
    });

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
