<template>
<div class="pa10">
<div class="mydata-title">{{typename}}</div>
<ul class="mydata-cell">
	<li v-for="vo in datalist">
		<span class="mydata-cell-list">{{ vo.ftime }}<br/>{{vo.cname}} ￥{{vo.money}} <small>{{vo.mark}}</small></span>
	</li>
</ul>
</div>
</template>

<script>
export default {
	data () {
		return {
			// datalist:[
			// 	{cname:'红包',money:'12.85',ftime:1515400584,mark:123},
			// 	{cname:'红包',money:'12.85',ftime:1515400584,mark:456},
			// ]
		}
	},
	props:{
		datalist:{
			type:Array,
			required:true
		},
		typename:{
			type:String,
			required:true
		}
	},
  	mounted() {
		console.log(this.datalist);
    	// this.getinfo(this.type);
  	},
	methods:{
	}
}
</script>

<style>

</style>