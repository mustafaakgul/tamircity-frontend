import NextStep from "../../mixins/StepMixins";

const state = {
  fixTypes: []
}

const getters = {
  getStateFixTypes(state) {
    return state.fixTypes;
  },
};

const mutations = {
  getFixType(state, payload) {
    state.fixTypes = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.description }
      state.fixTypes.push(test)
    })     
    NextStep("model", "fixType");

  },

};

const actions = {
  getFixTypes({ commit, rootState }, payload) {
    console.log("getFixType action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem brand : " + rootState.selectedItems.fixTypes)
    rootState.selectedItems.model = payload;
    this.axios.get("http://167.172.105.3:8000/api/v1/fix-types/query?device_type_Id="+ rootState.selectedItems.device.id)
     .then(response => {
        console.log("fixTypes response : " + response.data.data);
        commit("getFixType", response.data.data);
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