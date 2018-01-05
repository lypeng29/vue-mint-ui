<template>
<div>
	<headerVue></headerVue>
	view file
<router-link :to="{name: 'list'}"><mt-button type="primary">list</mt-button></router-link>
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