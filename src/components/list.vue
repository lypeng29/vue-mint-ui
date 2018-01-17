<template>
<ul class="cell">
	<li v-for="vo in datas" @click="mark(vo.atime,vo.type,vo.money)">
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
</template>

<script>
import {Toast} from 'mint-ui';
import {getinfo} from '../api/form'	
	export default {
		data () {
			return {
				datas:[]
			}
		},
		mounted() {
			this.getinfo();
		},		
		methods:{
			mark(c,t,m){
				if(t == 1){
					var s = c+" 支出： ￥"+m;
				}else{
					var s = c+" 收入： ￥"+m;
				}
				Toast({
					message: s,
					// position: 'top',
					duration: 3000
				});
			},
			getinfo(){
				getinfo('').then(res => {
					this.datas = res.data.data;
				})
			}			
		},
		// filters:{
			//php端去处理
			// {{ vo.addtime|ftime }}
			// ftime:function(t){
			// 	return friendly_time(t);
			// },
			// {{[vo.cid,vo.type]|catfilter}}
			// catfilter:function([cat,type]){
			// 	if(type==1){
			// 		var str="其他,餐饮,购物,住房,交通";
			// 	}else{
			// 		var str="其他,工资,红包";
			// 	}

			// 	var strs= new Array();
			// 	strs=str.split(",");
			// 	return strs[cat];
			// }
		// }
	}
</script>

<style scoped>

</style>