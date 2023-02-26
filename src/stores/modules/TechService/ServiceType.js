import NextStep from "../../../mixins/StepMixins";

const state = {
  serviceTypes: [],
};

const getters = {
  getStateTechServiceTypes(state) {
    return state.serviceTypes;
  },
};

const mutations = {
  getTechServiceType(state, payload) {
    state.serviceTypes = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name };
      state.serviceTypes.push(test);
    });
    NextStep("fixType", "serviceType");
  },
};

const actions = {
  getTechServiceTypes({ commit, rootState }, payload) {
    rootState.selectedItems.fixType = payload;
    this.axios
      .get("/api/v1/service-types")
      .then((response) => {
        commit("getServiceType", response.data.data);
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
