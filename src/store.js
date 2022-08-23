import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			isShowing: false,
			canClickFadeCloseModal: true,
		};
	},
	mutations: {
		toggleModal(state) {
			state.isShowing = !state.isShowing;
		},
	},
});

export default store;
