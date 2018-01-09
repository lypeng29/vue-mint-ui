<template>
<ul class="cell">
	<li v-for="vo in datas">
		<span v-if="vo.type == 1" class="cell-img">
			<img src="../assets/payout.png" align="absmiddle">
		</span>
		<span v-else class="cell-img">
			<img src="../assets/payin.png" align="absmiddle">
		</span>
		<span class="cell-category">{{vo.category}}</span>
		<span class="cell-money">￥{{vo.money}}</span>
		<span class="cell-time">{{ vo.time|ftime }}</span>
	</li>
</ul>
</template>

<script>
    function friendly_time(time_stamp) {
        var now_d = new Date();
        var now_time = now_d.getTime() / 1000; //获取当前时间的秒数
        var f_d = new Date();
        f_d.setTime(time_stamp * 1000);
        var f_time = f_d.toLocaleDateString();
       
        var ct = now_time - time_stamp;
        var day = 0;
        if (ct < 0)
        {
          f_time = f_d.toLocaleString();
        }
        else if (ct < 60)
        {
          f_time = Math.floor(ct) + '秒前';
        }
        else if (ct < 3600)
        {
          f_time = Math.floor(ct / 60) + '分钟前';
        }
        else if (ct < 86400)//一天
        {
          f_time = Math.floor(ct / 3600) + '小时前';
        }
        else if (ct < 604800)//7天
        {
          day = Math.floor(ct / 86400);
          if (day < 2)
            f_time = '昨天';
          else
            f_time = day + '天前';
        }
        else
        {
          day = Math.floor(ct / 86400);
          f_time = day + '天前';
        }
        return f_time;
    }
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

<style scoped>

</style>