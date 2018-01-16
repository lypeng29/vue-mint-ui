<template>
	<div>
		<div class="mybg"><img src="../assets/banner2.jpg" width="100%"></div>
		<div class="headimg"><img src="../assets/headimg.jpg" /></div>
 
		<!-- cell -->
		<br/>
		<mt-cell title="总计：">￥{{v1}}<img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="总计：">￥{{v2}}<img slot="icon" src="../assets/payin.png"></mt-cell>
		<br/>
		<mt-cell title="本月：" is-link @click.native="handleClick('this','1')"><span>￥{{v3}} 明细</span><img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="本月：" is-link @click.native="handleClick('this','2')"><span>￥{{v4}} 明细</span><img slot="icon" src="../assets/payin.png"></mt-cell>
		
		<mt-popup v-model="popupVisible" position="right" modal=true><child> </child></mt-popup>

	</div>
</template>

<script>
import {getsum} from '../api/form';
import datavue from './typedata.vue';
	export default {
		data () {
			return {
				popupVisible: false,
				v1: '0.00',
				v2: '0.00',
				v3: '0.00',
				v4: '0.00'
			}
		},
		mounted() {
			this.getsum();
		},		
		methods:{
			getsum(){
				var that=this;
				getsum().then(function(res){
					that.v1=res.data.data.v1;
					that.v2=res.data.data.v2;
					that.v3=res.data.data.v3;
					that.v4=res.data.data.v4;
				})
			},
			handleClick:function(a,b){
				this.popupVisible=true;
			}
		},
		components:{
			child:datavue
		}
	}
</script>

<style>
</style>
