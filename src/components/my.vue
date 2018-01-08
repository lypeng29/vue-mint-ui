<template>
	<div>
		<div class="mybg"><img src="../assets/banner2.jpg" width="100%"></div>
		<div class="headimg"><img src="../assets/headimg.jpg" /></div>
 
		<!-- cell -->
		<br/>
		<mt-cell title="上月：￥1111.00" is-link @click.native="handleClick('1')"><span>明细</span><img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="上月：￥2222.00" is-link @click.native="handleClick('2')"><span>明细</span><img slot="icon" src="../assets/payin.png"></mt-cell>
		<br/>
		<mt-cell title="本月：￥3333.00" is-link @click.native="handleClick('3')"><span>明细</span><img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="本月：￥4444.00" is-link @click.native="handleClick('4')"><span>明细</span><img slot="icon" src="../assets/payin.png"></mt-cell>
		
		<mt-popup v-model="popupVisible" position="right" modal=true><child v-bind:typedata="typedata"> </child></mt-popup>

	</div>
</template>

<script>
import datavue from './typedata.vue';
	export default {
		data () {
			return {
				popupVisible: false,
				typedata: 1,
			}
		},
		methods:{
			handleClick: function(e) {
				//获取数据
				this.typedata=e;
        		this.popupVisible = true
        	}
		},
		components:{
			child:datavue
		}
	}
</script>

<style>
</style>
