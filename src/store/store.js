import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
import actions from "./actions";
import mutations from './mutations';
import getters from './getters';
import state from './state';
export default new vuex.Store({
	actions,getters,mutations,state
})