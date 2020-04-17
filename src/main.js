import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//鼠标左键框选
import vueDragSelectPro from 'vue-drag-select-pro'
import 'vue-drag-select-pro/lib/vueDragSelectPro.css'
//鼠标右键菜单
import rightMenu from '@/plugins/rightMenu'
import '@/plugins/rightMenu/index.scss'
//鼠标点击元素外
import clickOutside from '@/plugins/clickOutside'
//图标库
import 'font-awesome/css/font-awesome.min.css';
//动画
import animated from 'animate.css';

Vue.use(vueDragSelectPro).use(rightMenu).use(clickOutside).use(animated)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
