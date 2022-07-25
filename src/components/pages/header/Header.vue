<template>
	<header class="header header-mb">
		<div class="container header__container">
			<span class="logo">
				KIMOTO
			</span>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-item" v-for="link in links" :key="link.alias">
						<a :href="link.url">
							{{ link.title }}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import header from './header.scss'
import { links } from '@/_config.js'

export default {
	data() {
		return {
			links
		};
	},
};
</script>
