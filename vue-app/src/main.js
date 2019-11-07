import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mgr from './security/security'

//Vuex should be used instead
const globalData = {
  isAuthenticated: false,
  user: '',
  mgr: mgr
}

const globalMethods = { 
  async authenticate(returnPath){
    const user = await this.$root.getUser(); //see if the user details are in local storage
    if(!!user){
      this.isAuthenticated = true;
      this.user = user;
    }else{
      await this.$root.signIn(returnPath);
    }
    console.log('yet to be implemented');
  },
  async getUser(){
    try{
      return await this.mgr.getUser();
    }catch(err){
      console.log(err);
    }
  },
  signIn(returnPath){
    returnPath ? this.mgr.signinRedirect({state: returnPath}) : this.mgr.signinRedirect();
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: globalData,
  methods: globalMethods,
}).$mount('#app')
