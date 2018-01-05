<template>
<div>
	<headerVue></headerVue>
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">支出</mt-tab-item>
	  <mt-tab-item id="2">收入</mt-tab-item>
	</mt-navbar>
	<div class="box">
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
			<mt-radio title="花费类别" v-model="value" :options="options"></mt-radio>
			<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number"></mt-field>
			<mt-field label="时间" placeholder="请选择时间" type="date" v-model="date"></mt-field>
			<mt-field label="备注" placeholder="备注" v-model="mark"></mt-field>
			<mt-button type="primary" @click="tz('list')" class="button_form">提交</mt-button>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
			<mt-radio title="收入类别" v-model="value" :options="options"></mt-radio>
			<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number"></mt-field>
			<mt-field label="时间" placeholder="请选择时间" type="date" v-model="date"></mt-field>
			<mt-field label="备注" placeholder="备注" v-model="mark"></mt-field>
			<mt-button type="primary" @click="tz('list')" class="button_form">提交</mt-button>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
	<footerVue></footerVue>
</div>
</template>

<script>
import Header from './header.vue';
import Footer from './footer.vue';
import { Toast } from 'mint-ui';
	export default {
		data () {
			return {
				options : [
				  {
				    label: '餐饮',
				    value: 'cy',
				  },
				  {
				    label: '购物',
				    value: 'gw'
				  },
				  {
				    label: '通讯',
				    value: 'tx'
				  },
				  {
				    label: '其他',
				    value: 'qt'
				  }
				],
				value: 'cy',
				number: '0.00',
				date: getNowFormatDate(),
				mark: '',
				selected: 1
			}
		},
		components:{
			'headerVue':Header,
			'footerVue':Footer
		},
		methods:{
			tz(page){
				Toast({
				  duration: 2000,
				  message: '跳转成功',
				  iconClass: 'icon icon-success'
				});
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