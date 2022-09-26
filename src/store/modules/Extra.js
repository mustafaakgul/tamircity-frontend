import NextStep from "../../mixins/StepMixins";

const state = {
  extras: []
}

const getters = {
  getStateExtras(state) {
    return state.extras;
  },
};

const mutations = {
  getExtra(state, payload) {
    state.extras = [];
    payload.forEach((item, index) => {
      let test = { id: index, text: item.description }
      state.extras.push(test)
    })     
    NextStep("techService", "extra");


  },

};

const actions = {
    getExtras({ commit, rootState }, payload) {
    //console.log("getExtra action worked selected tech service :" + JSON.stringify(payload))
    rootState.selectedItems.techService = payload;
    // let extraList = [{ Id: 1, Text: "Cihaz Bakım Paketi" }, { Id: 2, Text: "Ekran Koruma" }]
    // commit("getExtra", extraList);
    http://167.172.105.3:8000/api/v1/extra-services
    this.axios.get("/api/v1/extra-services")
    .then(response => {
        console.log("extraService response : " + JSON.stringify(response.data));
        commit("getExtra", response.data.data);
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