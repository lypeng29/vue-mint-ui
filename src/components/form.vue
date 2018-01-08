<template>
<div>
	<mt-navbar v-model="tselected">
	  <mt-tab-item id="1">支出</mt-tab-item>
	  <mt-tab-item id="2">收入</mt-tab-item>
	</mt-navbar>

	<mt-tab-container v-model="tselected">
	  <mt-tab-container-item id="1">
		<mt-radio title="花费类别" v-model="value" :options="options"></mt-radio>
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="date" v-model="date"></mt-field>
		<mt-field label="备注" placeholder="备注" v-model="mark"></mt-field>
		<mt-button type="primary" @click="tz('list')" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number2"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="date" v-model="date2"></mt-field>
		<mt-field label="备注" placeholder="备注" type="textarea" rows="2" v-model="mark2"></mt-field>
		<mt-button type="primary" @click="tz('list')" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	</mt-tab-container>
</div>
</template>

<script>
	export default {
		data () {
			return {
				options : [
				  {
				    label: '餐饮(吃)',
				    value: 'cy',
				  },
				  {
				    label: '购物(穿)',
				    value: 'gw'
				  },
				  {
				    label: '住房(住)',
				    value: 'zf'
				  },
				  {
				    label: '交通(行)',
				    value: 'cx'
				  },
				  {
				    label: '其它(备)',
				    value: 'qt'
				  }
				],
				value: 'cy',
				number: '',
				date: getNowFormatDate(),
				mark: '',
				number2: '',
				date2: getNowFormatDate(),
				mark2: '',				
				tselected: '1'
			}
		},
		methods:{
			tz(page){
				var url = '#/'+page;
				location.href=url;
			}
		}
	}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}	
</script>

<style>
</style>