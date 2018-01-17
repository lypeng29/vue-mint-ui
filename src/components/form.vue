<template>
<div>
	<mt-navbar v-model="tselected">
	  <mt-tab-item id="1">支出</mt-tab-item>
	  <mt-tab-item id="2">收入</mt-tab-item>
	</mt-navbar>

	<mt-tab-container v-model="tselected">
	  <mt-tab-container-item id="1">
		<mt-radio title="花费类别" v-model=value :options="options1"></mt-radio>
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="datetime" v-model="date"></mt-field>
		<mt-field label="备注" placeholder="备注" v-model="mark"></mt-field>
		<mt-button type="primary" @click="post1()" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
		<mt-radio title="收入类别" v-model=value2 :options="options2"></mt-radio>
		<mt-field label="金额" placeholder="请输入金额" type="number" v-model="number2"></mt-field>
		<mt-field label="时间" placeholder="请选择时间" type="datetime" v-model="date2"></mt-field>
		<mt-field label="备注" placeholder="备注" type="textarea" rows="2" v-model="mark2"></mt-field>
		<mt-button type="primary" @click="post2()" class="button_form">提交</mt-button>
	  </mt-tab-container-item>
	</mt-tab-container>
</div>
</template>

<script>
import {Toast} from 'mint-ui';
import {getcategory,addfinance} from '../api/form'
export default {
	data() {
		return {
			options1: [],
			options2: [],			
			value: '1',
			value2: '6',
			number: '',
			date: getCurrentDate(),
			mark: '',
			number2: '',
			date2: getCurrentDate(),
			mark2: '',
			tselected: '1'
		}
	},
	mounted() {
		this.getoptions1();
		this.getoptions2();
	},	
	methods: {
		getoptions1(){
			getcategory(1).then(res => {
                this.options1 = res.data.data;
            })
		},
		getoptions2(){
			getcategory(2).then(res => {
                this.options2 = res.data.data;
            })
		},		
		// getoptions2(){
		// 	var that = this;
		// 	axios.get('http://www.test2.com/api/getcategory/2').then(function(res){
        //         that.options2 = res.data.data;
		// 	});
		// },	
		post1() {
			addfinance({
				cid: this.value,
				type:1,
				money: this.number,
				addtime: Date.parse(new Date(this.date))/1000,
				mark: this.mark
			}).then(function(res){
				if(res.data.code == 0){
					// Toast('操作成功');
					Toast('提交成功');
				}else{
					console.log(res.data);
					Toast('error');
				}
			});
		},
				
		post2() {
			addfinance({
				cid: this.value2,
				type:2,
				money: this.number2,
				addtime: Date.parse(new Date(this.date2))/1000,
				mark: this.mark2
			}).then(function(res){
				if(res.data.code == 0){
					Toast('提交成功');
				}else{
					Toast('error');
				}
			});
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
    function getCurrentDate()
    {
      var timeStr = '';
      var curDate = new Date();
      var curYear = curDate.getFullYear();  //获取年
      var curMonth = curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
      var curDay = curDate.getDate();       //获取当前日(1-31)
      var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
      var curHour = curDate.getHours();      //获取当前小时数(0-23)
     var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
     var curSec =curDate.getSeconds();      //获取当前秒数(0-59)
     timeStr = curYear+'-'+curMonth+'-'+curDay;
    //  switch(curWeekDay)
    //  {
    //    case 0:timeStr += '日';break;
    //    case 1:timeStr += '一';break;
    //    case 2:timeStr += '二';break;
    //    case 3:timeStr += '三';break;
    //    case 4:timeStr += '四';break;
    //    case 5:timeStr += '五';break;
    //    case 6:timeStr += '六';break;
    //  }
     if(curHour < 10)
     {
       if(curMinute < 10)
       {
         if(curSec < 10)
         {
           timeStr += ' 0'+curHour+':0'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' 0'+curHour+':0'+curMinute+':'+curSec;
         }
       }
       else
       {
         if(curSec < 10)
         {
           timeStr += ' 0'+curHour+':'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' 0'+curHour+':'+curMinute+':'+curSec;
         }
       }
     }
     else
     {
       if(curMinute < 10)
       {
         if(curSec < 10)
         {
           timeStr += ' '+curHour+':0'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' '+curHour+':0'+curMinute+':'+curSec;
         }
       }
       else
       {
         if(curSec < 10)
         {
           timeStr += ' '+curHour+':'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' '+curHour+':'+curMinute+':'+curSec;
         }
       }
     }
     return timeStr;
   }
</script>

<style>
</style>