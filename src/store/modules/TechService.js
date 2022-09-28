import NextStep from "../../mixins/StepMixins";

const state = {
  techServices: [],
};

const getters = {
  getStateTechServices(state) {
    return state.techServices;
  },
};

const mutations = {
  getTechService(state, payload) {
    state.techServices = [];
    payload.forEach((item, index) => {
      let test = { id: index, text: item.name, address: item.address };
      state.techServices.push(test);
    });
    NextStep("serviceType", "techService");
  },
};

const actions = {
  getTechServices({ commit, rootState }, payload) {
    rootState.selectedItems.serviceType = payload;
    this.axios
      .get(
        "/api/v1/technical-services/query?model_id=" +
          rootState.selectedItems.model.id
      )
      .then((response) => {
        commit("getTechService", response.data.data);
      })
      .catch((e) => console.log(e));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
