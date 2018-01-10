<template>
<div>
	<mt-header title="个人记账" fixed>
<!-- 	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link> -->
	</mt-header>
	<div class="header"></div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';

	export default {
		data () {
			return {
				msg: 'Hello world!'
			}
		},
		methods:{
			handleClose(){
				// Toast({
				//   duration: 4000,
				//   message: '操作成功',
				//   iconClass: 'icon icon-success'
				// });
			}
		}
	}
</script>

<style>
</style>