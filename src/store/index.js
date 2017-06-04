import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        todoList : []
    },
    mutations,
    getters,
    plugins,
    actions,
});
