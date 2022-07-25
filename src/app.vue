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

import Header from '@/components/pages/header/Header.vue'
import My_projects from '@/components/pages/my_projects/My_projects.vue'
import About_me from '@/components/pages/about_me/About_me.vue'
import Contacts from '@/components/pages/contacts/Contacts.vue'
import Footer from '@/components/pages/footer/Footer.vue'

export default {
	components: { Header, My_projects, About_me, Contacts, Footer },
}
</script>
