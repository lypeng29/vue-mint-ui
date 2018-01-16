<template>
<div class="pa10">
<ul class="cell">
	<li v-for="vo in datas">
		<span v-if="vo.type == 1" class="cell-img">
			<img src="../assets/payout.png" align="absmiddle"> ￥{{vo.money}}
		</span>
		<span v-else class="cell-img">
			<img src="../assets/payin.png" align="absmiddle"> ￥{{vo.money}}
		</span>
		<span class="cell-time">{{ vo.ftime }}</span>
		<span class="cell-category">{{vo.cname}} <small>{{vo.mark}}</small></span>
	</li>
</ul>
</div>
</template>

<script>
export default {
	data () {
		return {
			datas:[
				{cname:'红包',type:'2',money:'12.85',ftime:1515400584,mark:123},
				{cname:'红包',type:'2',money:'12.85',ftime:1515400584,mark:456},
			]
		}
	},
	// props:['month','type'],
  	// mounted() {
    // 	this.getinfo();
  	// },
	methods:{
	    // totlcli:function(num){//这个回调在父组件监听到事件时，执行的，其参数为触发事件时传递的。
    	//     console.log(num);
		// 	// return this.number=num;
    	// },
		getinfo(){
			// console.log(this.month);
			// console.log(this.type);
			// getinfo(this.month,this.type).then(res => {
				// this.datas = res.data.data;
			// })
		}
	}
}
</script>

<style>

</style>