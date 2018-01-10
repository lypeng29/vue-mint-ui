<template>
<div>
	<headerVue></headerVue>
	<div class="pa10 mb60">
    <!-- tabcontainer -->  
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
	</div>
	<!-- 底部开始 -->
	<mt-tabbar v-model="selected" fixed>
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
</template>

<script>
import Header from './header.vue';
import Formvue from './form.vue';
import Listvue from './list.vue';
import Myvue from './my.vue';
	export default {
		data () {
			return {				
				selected: '记账'
			}
		},
		components:{
			'headerVue':Header,
			'formVue':Formvue,
			'listVue':Listvue,
			'myVue':Myvue,
		},
		methods:{
		}
	}	
</script>

<style>
</style>