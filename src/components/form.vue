<template>
<div>
	<mt-navbar v-model="tselected">
	  <mt-tab-item id="1">支出</mt-tab-item>
	  <mt-tab-item id="2">收入</mt-tab-item>
	</mt-navbar>

	<mt-tab-container v-model="tselected">
	  <mt-tab-container-item id="1">
		<mt-radio title="花费类别" v-model="value" :options="options1"></mt-radio>
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="datetime" v-model="date"></mt-field>
		<mt-field label="备注" placeholder="备注" v-model="mark"></mt-field>
		<mt-button type="primary" @click="post1()" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
		<mt-radio title="收入类别" v-model="value" :options="options2"></mt-radio>
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number2"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="datetime" v-model="date2"></mt-field>
		<mt-field label="备注" placeholder="备注" type="textarea" rows="2" v-model="mark2"></mt-field>
		<mt-button type="primary" @click="post2()" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	</mt-tab-container>
</div>
</template>

<script>
import axios from 'axios';
import Toast from 'mint-ui';
export default {
	data() {
		return {
			options1: [{
					label: '餐饮(吃)',
					value: '1',
				},
				{
					label: '购物(穿)',
					value: '2'
				},
				{
					label: '住房(住)',
					value: '3'
				},
				{
					label: '交通(行)',
					value: '4'
				},
				{
					label: '其它(备)',
					value: '0'
				}
			],
			options2: [{
					label: '工资',
					value: '1',
				},
				{
					label: '红包',
					value: '2'
				},
				{
					label: '其它',
					value: '0'
				}
			],			
			value: '1',
			number: '',
			date: getNowFormatDate(),
			mark: '',
			number2: '',
			date2: getNowFormatDate(),
			mark2: '',
			tselected: '1'
		}
	},
	methods: {
		post1() {
			// alert(this.number);
			axios.post('http://www.test.com/vue-mint-ui/api/index.php?act=add', {
				category: this.value,
				type:1,
				money: this.number,
				time: Date.parse(new Date(this.date))/1000,
				mark: this.mark
			}).then(function (data) {
					if(data.data == 1){
						console.log('1111111');
					}
			}).catch(function (error) {
					console.log(error);
			});
		},
		post2() {
			alert(this.number2);
		},
		tz(page) {
			var url = '#/' + page;
			location.href = url;
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