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
      let test = { id: index, text: item.Text }
      state.extras.push(test)
    })     
    NextStep("techService", "extra");


  },

};

const actions = {
    getExtras({ commit, rootState }, payload) {
    console.log("getExtra action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem extra : " + rootState.selectedItems.extras)
    rootState.tabDisabled.extra = false;
    let extraList = [{ Id: 1, Text: "Cihaz Bakım Paketi" }, { Id: 2, Text: "Ekran Koruma" }]
    commit("getExtra", extraList);

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