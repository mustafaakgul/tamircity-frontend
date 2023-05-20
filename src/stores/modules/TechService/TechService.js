import NextStep from "../../../mixins/StepMixins";

const state = {
  techServices: [],
};

const getters = {
  getStateTechTechServices(state) {
    return state.techServices;
  },
};

const mutations = {
  getTechTechService(state, payload) {
    state.techServices = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name, address: item.address };
      state.techServices.push(test);
    });
    NextStep("serviceType", "techService");
  },
};

const actions = {
  getTechTechServices({ commit, rootState }, payload) {
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
