import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'; 

import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css';
import './assets/style.css';

import Home from './components/home.vue';
import FormTable from './components/formtable.vue';
import List from './components/list.vue';
import View from './components/view.vue';

Vue.use(VueRouter);
Vue.use(Mint);

let router = new VueRouter({
	routes : [
		{path:'/', component:Home},
		{name:'home', path:'/home', component:Home},
		{name:'form', path:'/form', component:FormTable},
        {name:'list', path:'/list', component:List},
		{name:'view', path:'/view', component:View},
	]
})

new Vue({   
    el: '#app',
    //渲染内容
    // render:function(c){
    // 	return c(App);
    // },
    router:router,
    render:c=>c(App),
    //es6写法，=>函数
    //1.当参数只有一个的时候，小括号可以省略
    //2.当代码只有一行且是返回值的时候，大括号可以省略
})
