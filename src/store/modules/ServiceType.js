import NextStep from "../../mixins/StepMixins";

const state = {
  serviceTypes: []
}

const getters = {
  getStateServiceTypes(state) {
    return state.serviceTypes;
  },
};

const mutations = {
    getServiceType(state, payload) {
    state.serviceTypes = [];
    payload.forEach((item, index) => {
      let test = { id: index, text: item.name }
      state.serviceTypes.push(test)
    })     
    NextStep("fixType", "serviceType");

  },

};

const actions = {
    getServiceTypes({ commit, rootState }, payload) {
    console.log("getServiceType action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem serviceType : " + rootState.selectedItems.serviceType)
    rootState.tabDisabled.serviceType = false;
     this.axios.get("http://167.172.105.3:8000/api/v1/service-types")
     .then(response => {
        console.log("getServiceType response : " + response.data.data);
         commit("getServiceType", response.data.data);
     })
    .catch(e => console.log(e));

  },

};

export default {
  state,
  getters,
  mutations,
  actions,
};