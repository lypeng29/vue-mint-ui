<template>
<div>
	<mt-cell v-for="vo in datas" title="">
		<span class="cell-time">{{ vo.time|ftime }}</span>
		<span class="cell-category">{{vo.category}}</span>
		<span v-if="vo.type == 1">
			<img slot="icon" v-if="" src="../assets/payout.png">
		</span>
		<span v-else>
			<img slot="icon" v-if="" src="../assets/payin.png">
		</span>
		<span class="cell-money">￥{{vo.money}}</span>

	</mt-cell>
</div>
</template>

<script>
	export default {
		data () {
			return {
				datas:[
					{category:'红包',type:'2',money:'12.85',time:1515400584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'红包',type:'2',money:'100',time:1515400584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
					{category:'餐饮',type:'1',money:'300',time:1515300584},
				]
			}
		},
		filters:{
			ftime:function(t){
				return friendly_time(t);
			}
		},
	}
</script>

<style>

</style>