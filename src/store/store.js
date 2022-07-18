import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import DeviceType from "./modules/DeviceType";
import Brand from "./modules/Brand";
import Model from "./modules/Model";
import FixType from "./modules/FixType";
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"

export const store = new Vuex.Store({
    state:{},
    getters,
    mutations,
    actions,
    modules:{
        DeviceType,
        Brand,
        Model,
        FixType
    }
})