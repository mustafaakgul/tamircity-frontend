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
      let test = { id: index, text: item.Text }
      state.fixTypes.push(test)
    })     
    NextStep("model", "fixType");

  },

};

const actions = {
  getFixTypes({ commit, rootState }, payload) {
    console.log("getFixType action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem brand : " + rootState.selectedItems.fixTypes)
    rootState.tabDisabled.fixTypes = false;
    let fixTypeList = [{ Id: 1, Text: "Batarya Değişimi" }, { Id: 2, Text: "Şarj Soketi Değişimi" }]
    commit("getFixType", fixTypeList);

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