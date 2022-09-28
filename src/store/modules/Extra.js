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
    
    NextStep("techService", "extraProduct");
  },
};

const actions = {
    getExtras({ commit, rootState }, payload) {
    rootState.selectedItems.techService = payload;
    this.axios.get("/api/v1/extra-services")
    .then(response => {
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