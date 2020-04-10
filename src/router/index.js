import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

/* Components */
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import Login from '@/components/Login'
import Register from '@/components/Register'



Vue.use(Router)

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
			meta:{
				requiresAuth: true
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta:{
				requiresGuest: true,
			}
		},
		{
			path: '/register',
			name: 'Register',
			component: Register,
			meta:{
				requiresGuest: true
			}
		},
		{
			path: '/new',
			name: 'NewEmployee',
			component: NewEmployee,
			meta:{
				requiresAuth: true
			}
		},
		{
			path: '/:employee_id',
			name: 'ViewEmployee',
			component: ViewEmployee,
			meta:{
				requiresAuth: true
			}
		},
		{
			path: '/edit/:employee_id',
			name: 'EditEmployee',
			component: EditEmployee, 
			meta:{
				requiresAuth: true
			}
		}
	]
})

// Nav Guards
router.beforeEach( (to, from, next) => {
	
	// Check for requiresAuth guard
	if( to.matched.some( record => record.meta.requiresAuth ) ){
		
		// check if NOT logged in
		if( !firebase.auth().currentUser ){
			// go to login page
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			});
		} else {
			next(); // go to route
		}

	// Check for requiresGuest guard
	} else if( to.matched.some( record => record.meta.requiresGuest ) ){
		
		// check if NOT logged in
		if( firebase.auth().currentUser ){
			// go to homepage (dashboard)
			next({
				path: '/',
				query: {
					redirect: to.fullPath
				}
			});
		} else {
			next(); // go to route
		}

	} else {
		next(); // go to route
	}

});


export default router;



