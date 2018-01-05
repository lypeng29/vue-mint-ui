<template>
<div>
	<headerVue></headerVue>
	list file
	<router-link :to="{name: 'view'}"><mt-button type="primary">view</mt-button></router-link>
	<footerVue></footerVue>
</div>
</template>

<script>
import Header from './header.vue';
import Footer from './footer.vue';
	export default {
		data () {
			return {
				
			}
		},
		components:{
			'headerVue':Header,
			'footerVue':Footer
		}
	}
</script>

<style>

</style>