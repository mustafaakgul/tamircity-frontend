import Vuex from 'vuex'
//import Vue from 'vue'

import deviceTypeTech from "./modules/TechService/DeviceType";
import brandTech from "./modules/TechService/Brand";
import modelTech from "./modules/TechService/Model";
import fixTypeTech from "./modules/TechService/FixType";
import serviceTypeTech from "./modules/TechService/ServiceType"
import techServiceTech from "./modules/TechService/TechService"
import extraTech from "./modules/TechService/Extra"

import deviceType from "./modules/ExpertiseService/DeviceType";
import brand from "./modules/ExpertiseService/Brand";
import model from "./modules/ExpertiseService/Model";
import serviceType from "./modules/ExpertiseService/ServiceType"
import expertiseService from "./modules/ExpertiseService/ExpertiseService"

import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
import reservationTech from './modules/TechService/Reservation';
import reservation from './modules/ExpertiseService/Reservation';
import panelDashboard from './modules/panelDashboard';
import reservationTracking from './modules/reservationTracking';

import { alert } from './modules/alert';
import { account } from './modules/account';

// ? Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedItems: {
            device: null,
            brand: null,
            model: null,
            fixType: null,
            serviceType: null,
            expertiseService: null,
            extra: null
        },
    },
    getters,
    mutations,
    actions,
    modules: {
        deviceTypeTech: deviceTypeTech,
        brandTech: brandTech,
        modelTech: modelTech,
        fixTypeTech: fixTypeTech,
        serviceTypeTech: serviceTypeTech,
        techServiceTech : techServiceTech,
        extraTech: extraTech,
        reservationTech : reservationTech,
        panelDashboard : panelDashboard,

        deviceType: deviceType,
        brand: brand,
        model: model,
        serviceType: serviceType,
        expertiseService : expertiseService,
        reservation : reservation,

        reservationTracking:reservationTracking,

        alert,
        account
    }
})

