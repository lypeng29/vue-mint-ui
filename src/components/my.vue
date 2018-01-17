<template>
	<div>
		<div class="mybg"><img src="../assets/banner2.jpg" width="100%"></div>
		<div class="headimg"><img src="../assets/headimg.jpg" /></div>
 
		<!-- cell -->
		<br/>
		<mt-cell title="总计支出">￥{{v1}}<img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="总计收入">￥{{v2}}<img slot="icon" src="../assets/payin.png"></mt-cell>
		<br/>
		<mt-cell title="本月支出" is-link @click.native="handleClick('1')"><span>￥{{v3}} <small>查看明细</small></span><img slot="icon" src="../assets/payout.png"></mt-cell>
		<mt-cell title="本月收入" is-link @click.native="handleClick('2')"><span>￥{{v4}} <small>查看明细</small></span><img slot="icon" src="../assets/payin.png"></mt-cell>
		
		<mt-popup v-model="popupVisible" position="right" modal=true><child :datalist="datalist" :typename="typename"> </child></mt-popup>

	</div>
</template>

<script>
import {getsum,getinfo} from '../api/form';
import datavue from './typedata.vue';
	export default {
		data () {
			return {
				popupVisible: false,
				v1: '0.00',
				v2: '0.00',
				v3: '0.00',
				v4: '0.00',
				datalist: [],
				typename:''
			}
		},
		mounted() {
			this.getsum();
		},		
		methods:{
			handleClick:function(t){
				if(t == 1){
					this.typename = '本月支出统计';
				}else{
					this.typename = '本月收入统计';
				}
				getinfo(t).then(res=>{
					this.datalist = res.data.data;
				})
				this.popupVisible=true;
			},
			getsum(){
				var that=this;
				getsum().then(function(res){
					that.v1=res.data.data.v1;
					that.v2=res.data.data.v2;
					that.v3=res.data.data.v3;
					that.v4=res.data.data.v4;
				})
			}
		},
		components:{
			child:datavue
		}
	}
</script>

<style>
</style>
