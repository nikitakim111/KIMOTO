import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	// home
    { path: '/', name: 'home', component: () => import('@/components/pages/landing/Landing_main.vue') },

	// Todo-list routes
	{ path: '/todo-list', name: 'todo-list', component: () => import('@/components/pages/todo_list/Todo_list_main.vue') },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		}
	},
});
