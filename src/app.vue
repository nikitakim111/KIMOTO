<!-- import { thisTypeAnnotation } from '@babel/types' -->
<template>
	<Header :links="links" />
	<router-view></router-view>
	<Footer />
</template>

<script>
import fonts from '@/assets/fonts.scss'
import reset from '@/assets/reset.scss'
import { header_links } from '@/header_links.js'
// import variables from '@/assets/variables.scss'

import Header from '@/components/common_components/header/Header.vue'
import Footer from '@/components/common_components/footer/Footer.vue'
import Main from '@/components/pages/landing/Landing_main.vue'

export default {
	data() {
		return {
			links: []
		}
	},
	components: { Main, Header, Footer },
	watch: {
		'$route.name'() {
			for (let i = 0; i < header_links.length; i++) {
				if (this.$route.name === header_links[i].name) {
					this.links = header_links[i].links
				}
			}
		}
	}
}
</script>
