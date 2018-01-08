<template>
<div>
	<mt-swipe :auto="4000" :show-indicators="false" class="swiper">
	  <mt-swipe-item><img src="../assets/b11.jpg"></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/b12.jpg"></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/b13.jpg"></mt-swipe-item>
	</mt-swipe>
	
	<router-link :to="{name: 'home'}" class="start_button"><mt-button type="primary">开始记账</mt-button></router-link>

</div>
</template>

<script>

	export default {
		data () {
			return {
				
			}
		}
	}
</script>

<style>
</style>