import Vuex from 'vuex'

import deviceType from "./modules/deviceType";
import brand from "./modules/brand";
import model from "./modules/model";
import fixType from "./modules/fixType";
import serviceType from "./modules/serviceType"
import techService from "./modules/techService"
import extra from "./modules/extra"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
import reservation from './modules/reservation';

export const store = new Vuex.Store({
    state: {
        tabDisabled: {
            brand: true,
            model: true,
            fixType: true,
            serviceType: true,
            techService: true,
            extra: true,
            reservation: true

        },
        selectedItems: {
            device: null,
            brand: null,
            model: null,
            fixType: null,
            serviceType: null,
            techService: null,
            extra: null
        },
    },
    getters,
    mutations,
    actions,
    modules: {
        deviceType: deviceType,
        brand: brand,
        model: model,
        fixType: fixType,
        serviceType: serviceType,
        techService : techService,
        extra: extra,
        reservation : reservation
    }
    // https://vuex.vuejs.org/guide/modules.html
})

