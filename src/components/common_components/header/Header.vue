<template>
	<header class="header header-mb">
		<div class="container header__container">
			<span class="logo" @click="changeLinks()">
				KIMOTO
			</span>
			<div class="burger-menu" @click="burgerClicked()">
				<span class="burger-menu__stick"></span>
				<span class="burger-menu__stick"></span>
				<span class="burger-menu__stick"></span>
			</div>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-item" v-for="link in links" :key="link.alias">
						<router-link :to="link.url">
							{{ link.title }}
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import header from './header.scss'
// import { landing_links } from '@/header_links.js'

export default {
	props: {
		links: Array,
	},
	methods: {
		burgerClicked() {
			document.querySelector('.burger-menu').classList.toggle('burger-menu_open')
			document.querySelector('.header__nav').classList.toggle('header__nav_open')
		},
	},
};
</script>
