import NextStep from "../../../mixins/StepMixins";

const state = {
  expertiseServices: [],
};

const getters = {
  getStateExpertiseServices(state) {
    return state.expertiseServices;
  },
};

const mutations = {
  getExpertiseService(state, payload) {
    state.expertiseServices = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name, address: item.address };
      state.expertiseServices.push(test);
    });
    NextStep("serviceType", "expertiseService");
  },
};

const actions = {
  getExpertiseServices({ commit, rootState }, payload) {
    rootState.selectedItems.serviceType = payload;
    this.axios
      .get(
        "/api/v1/expertise-services/query?brand_id=" +
          rootState.selectedItems.brand.id +
            "&device_type_id=" +
          rootState.selectedItems.device.id
      )
      .then((response) => {
        commit("getExpertiseService", response.data.data);
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
