<template>
<div>
	<mt-swipe :auto="4000" :show-indicators="false" class="swiper">
	  <mt-swipe-item><img src="../assets/b11.jpg"></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/b12.jpg"></mt-swipe-item>
	  <mt-swipe-item><img src="../assets/b13.jpg"></mt-swipe-item>
	</mt-swipe>
	
	<router-link :to="{name: 'form'}" class="home_button"><mt-button type="primary">开始记账</mt-button></router-link>

</div>
</template>

<script>
import Header from './header.vue';
import Footer from './footer.vue';
import { Toast } from 'mint-ui';
	export default {
		data () {
			return {
				
			}
		},
		components:{
			'headerVue':Header,
			'footerVue':Footer
		},
		methods:{
			tz(page){
				Toast({
				  duration: 2000,
				  message: '跳转成功',
				  iconClass: 'icon icon-success'
				});
				var url = '#/'+page;
				location.href=url;
			}
		}
	}
</script>

<style>
</style>