import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'; 

import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css';
import './assets/style.css';


import start from './components/start.vue';
import Home from './components/home.vue';
// import Tabber from './components/tabber.vue';

Vue.use(VueRouter);
Vue.use(Mint);
// Vue.use(util);

let router = new VueRouter({
	routes : [
		{path:'/', component:start},
        {name:'start', path:'/start', component:start},
		{name:'home', path:'/home', component:Home},
		// {name:'tabber', path:'/tabber', component:Tabber},
	]
});

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
