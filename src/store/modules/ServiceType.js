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
      let test = { id: index, text: item.Text }
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
    let serviceTypeList = [{ Id: 1, Text: "Yerinde Tamir" }, { Id: 2, Text: "Merkezde Tamir" }, { Id: 3, Text: "Kargo" }, { Id: 4, Text: "Kurye" }]
    commit("getServiceType", serviceTypeList);

    // axios.get("http://localhost:8080/api/v1/brand?device_type_id="+ payload.device_type_id)
    // .then(response => {
    //     console.log("fixTypes response : " + response.data);
    //     commit("getFixType", response.data);
    // })
    // .catch(e => console.log(e));  

  },

};

export default {
  state,
  getters,
  mutations,
  actions,
};