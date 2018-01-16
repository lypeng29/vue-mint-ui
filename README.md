
[TOC]

# vue mint-ui axios等学完后，一个完整的demo

## 简要介绍
前端mint-ui,axios请求接口,fastphp与数据库(mysql)交互,一边学习，一边写，真心累～

## 效果图预览

## 官网地址
vue:https://cn.vuejs.org/
mint-ui: http://mint-ui.github.io/#!/zh-cn
fastphp: https://www.awaimai.com/128.html
vue视频：https://ke.qq.com/webcourse/index.html#course_id=247170&term_id=100291555&taid=1607941266589058&vid=j1421xnccmy

## 体验流程
1. git clone https://github.com/lypeng29/vue-mint-ui
2. npm install
3. npm run start
4. npm会自动打开localhost:5000预览

## 环境要求
已安装node与npm，确认是最新版，我使用的node9.2.1，npm5.5.1.
> `apt-get install nodejs `//默认安装的node是4.2.6,npm是3.5.2，好多包都安装不上去，提示版本太低

如果是apt-get安装的，可以采用下面命令升级,注意9.2.1替换成你自己的
```bash
npm cache clean -f
npm install -g n
n stable
rm /usr/bin/node
ln -s /usr/local/n/versions/node/9.2.1/bin/node /usr/bin/node
rm /usr/bin/npm
ln -s /usr/local/n/versions/node/9.2.1/bin/npm /usr/bin/npm
#查看下版本是否已经变化
node -v
npm -v
```

## 问题汇总

### 导入公共css
import './assets/style.css';//直接在main.js里面写

### 导入公共js
import './assets/common.js';//不行失败,尝试几种方法均已失败告终，这个问题暂时搁置，目前是各个vue文件的script里面直接写function

### tabber实例

```html
<div>
	<mt-tab-container class="page-tabbar-container" v-model="selected">  
		<mt-tab-container-item id="记账">  
			<formVue></formVue>
		</mt-tab-container-item>  
		<mt-tab-container-item id="列表">  
			<listVue></listVue>
		</mt-tab-container-item>
		<mt-tab-container-item id="我的">  
			<myVue></myVue>
		</mt-tab-container-item>  
	</mt-tab-container>
	<!-- 底部开始 -->
	<mt-tabbar v-model="selected">
	  <mt-tab-item id="记账">
	  	<img slot="icon" src="../assets/home.png">记账
	  </mt-tab-item>
	  <mt-tab-item id="列表">
	    <img slot="icon" src="../assets/list.png">列表
	  </mt-tab-item>
	  <mt-tab-item id="我的">
	    <img slot="icon" src="../assets/my.png">我的
	  </mt-tab-item>
	</mt-tabbar>
</div>
```

```javascript
	export default {
		data () {
			return {				
				selected: '记账'
			}
		}
```

### 新页面的弹出
用的mt-popup

### 与PHP交互
百度了有axios和vue-resouce,我目前采用axios,第二种还没用过，网上说官方不更新了，那就不考虑了～
安装：`npm install axios --save`
导入：`import axios from 'axios'`;
使用：注意需要解决跨域问题，写相对地址不出来
```javascript
axios.get('http://www.test.com/vue-mint-ui/api/index.php?id=12345')
  .then(function (data) {
    console.log(data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
```
#### 查看network可以发现，每次会发送两次请求
一次options，一次post，其中options请求没有任何参数，post请求是带参数的,payload,json格式

> 关于axios发送两次请求说明如下：
> 因为vue-resource不在更新，vue推荐使用axios，所以使用axios。 
> 在页面交互过程中，发现axios一定几率会发送两次请求，一次是自己设置的请求方式，还有一次是options。 
> 关于这个问题，在各个网站寻求原因，得出以下结论： 
> 跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。 
> 也就是说，它会先使用options去测试，你这个接口是否能够正常通讯，如果不能就不会发送真正的请求过来，如果测试通讯正常，则开始正常请求。 
> 关于这个问题，需要在后台进行设置，允许options请求，不然你的请求就会受到影响，后台并作出判断，如果请求方式为options，告诉它可以通讯，其他直接什么都不做。 
> 以下是PHP做设置内容 
> header("Access-Control-Allow-Origin:*"); 
> header("Access-Control-Allow-Headers:content-type"); 
> header("Access-Control-Request-Method:GET,POST"); 
> if(strtoupper($_SERVER['REQUEST_METHOD'])== 'OPTIONS'){ 
> exit; 
> } 
> 关于如何避免额外发送options请求的问题，尚在解决中。
> 以上文字来自：http://blog.csdn.net/insistlzh/article/details/73658230

#### PHP对参数的接收
axios.post(url,params,config);
三个参数：URL：字符串，params：对象（可以为空），config：对象（可以为空）

```javascript
axios.post('http://www.test.com/vue-mint-ui/api/index.php', {
	age : 55,
	name:'lili'
}).then(function (data) {
		console.log(data);
}).catch(function (error) {
		console.log(error);
});
```
Request Payload值如下：
{age: 55, name: "lili"}
直接$\_POST获取不到，需要用`php://input`获取，然后json_decode转换
```php
$d = json_decode(file_get_contents('php://input'),true);
echo $d['age'];
```
如果将config位置添加如下配置：
```javascript
{
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	}
}
```
上面那个问题，发送两次请求变为一次了，options不存在了(为什么，不懂了)，获取参数还是php://input

#### PHP参数获取终极解决方案，payload转变为form-data，后台继续用$\_POST获取，而不是php://input或者$\_GLOBAL['HTTP\_RAW\_POST_DATA']
改变header中content-type，同时使用qs库进行转换，这样也解决了发送两次请求，只剩一个post请求了～

`npm install qs;` 安装qs库，在需要请求的地方按下面格式写；

vue-mint-ui/src/api/form.js文件内容如下：

```javascript
import axios from 'axios';
// 创建axios实例
const fetch = axios.create({
    baseURL: 'http://www.test2.com',
    timeout: 5000 // 请求超时时间
});
import Qs from 'qs'
export function addfinance(postData) {
    return fetch({
        url: '/api/addfinance',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: Qs.stringify(postData)
    });
}
```

vue-mint-ui/src/components/form.vue内容如下：

`<button @click=post1()>发起POST请求</button>`

```javascript
<script>
import {Toast} from 'mint-ui';
import {addfinance} from '../api/form'
methods: {
	post1() {
		addfinance({
			cid: this.value,
			type:1,
			money: this.number,
			addtime: Date.parse(new Date(this.date))/1000,
			mark: this.mark
		}).then(function(res){
			if(res.data.code == 0){
				Toast('提交成功');
			}else{
				console.log(res.data);
				Toast('error');
			}
		});
	},
}
</script>
```

#### 父组件向子组件动态传值

例如：my.vue点击明细，将月份与类型传给child组件



