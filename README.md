# vue-mint-ui

### 导入公共css
import './assets/style.css';

### 导入公共js
import './assets/common.js';不行失败

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
