import Vuex from 'vuex'

import DeviceType from "./modules/DeviceType";
import Brand from "./modules/Brand";
import Model from "./modules/Model";
import FixType from "./modules/FixType";
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"

export const store = new Vuex.Store({
    state:{
        tabDisabled :{
            brand : true,
            model : true,
            fixType :true,
            serviceType : true,
            extra : true,
            techService : true,
            reservation: true
        
        },
        selectedItems:{
            device : null,
            brand : null,
            model :null,
            fixType : null,
            serviceType : null,
            extra : null,
            techService : null
        },
    },
    getters,
    mutations,
    actions,
    modules:{ 
        DeviceType : DeviceType,
        Brand : Brand,
        Model : Model,
        FixType : FixType
    }
    // https://vuex.vuejs.org/guide/modules.html
})

