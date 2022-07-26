import NextStep from "../../mixins/StepMixins";

const state = {
  techServices: []
}

const getters = {
  getStateTechServices(state) {
    return state.techServices;
  },
};

const mutations = {
    getTechService(state, payload) {
    state.techServices = [];
    payload.forEach((item, index) => {
      let test = { id: index, text: item.Text }
      state.techServices.push(test)
    })     
    console.log("asdsadsadsa")
    NextStep("serviceType", "techService");

  },

};

const actions = {
    getTechServices({ commit, rootState }, payload) {
    console.log("getTechServices action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem serviceType : " + rootState.selectedItems.techService)
    rootState.tabDisabled.serviceType = false;
    let techServiceList = [{ Id: 1, Text: "Teknik Servis 1" }, { Id: 2, Text: "Teknik Servis 2" }, { Id: 3, Text: "Teknik Servis 3" }, { Id: 4, Text: "Teknik Servis 4" }]
    commit("getTechService", techServiceList);

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