import Vue from 'vue';
import App from './App.vue';
import router from './router';
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

new Vue({
  
  router,
  render: h => h(App),
  HelloWorld,
}).$mount('#app')
