<template>
	<Header />
	<main class="main">
		<My_projects />
		<About_me />
		<Contacts />
	</main>
	<Footer />
</template>

<script>
import fonts from '@/assets/fonts.scss'
import reset from '@/assets/reset.scss'
// import variables from '@/assets/variables.scss'

import Header from '@/components/header/Header.vue'
import My_projects from '@/components/my_projects/My_projects.vue'
import About_me from '@/components/about_me/About_me.vue'
import Contacts from '@/components/contacts/Contacts.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
	components: { Header, My_projects, About_me, Contacts, Footer },
}
</script>
