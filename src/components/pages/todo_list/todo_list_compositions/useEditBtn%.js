import { ref } from 'vue';

const isEdit = ref(false);

export default function toggleEdit() {
	return !isEdit;
}
