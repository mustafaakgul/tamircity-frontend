import Vuex from 'vuex'

import deviceType from "./modules/TechService/DeviceType";
import brand from "./modules/TechService/Brand";
import model from "./modules/TechService/Model";
import fixType from "./modules/TechService/FixType";
import serviceType from "./modules/TechService/ServiceType"
import techService from "./modules/TechService/TechService"
import extra from "./modules/TechService/Extra"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
import reservation from './modules/TechService/Reservation';
import panelDashboard from './modules/panelDashboard';

export const store = new Vuex.Store({
    state: {
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
        reservation : reservation,
        panelDashboard : panelDashboard
    }
    // https://vuex.vuejs.org/guide/modules.html
})

