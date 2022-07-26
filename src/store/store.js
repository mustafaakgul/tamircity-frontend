import Vuex from 'vuex'

import DeviceType from "./modules/DeviceType";
import Brand from "./modules/Brand";
import Model from "./modules/Model";
import FixType from "./modules/FixType";
import ServiceType from "./modules/ServiceType"
import TechService from "./modules/TechService"
import Extra from "./modules/Extra"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"

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
        DeviceType: DeviceType,
        Brand: Brand,
        Model: Model,
        FixType: FixType,
        ServiceType: ServiceType,
        TechService : TechService,
        Extra: Extra
    }
    // https://vuex.vuejs.org/guide/modules.html
})

