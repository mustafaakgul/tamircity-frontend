import NextStep from "../../../mixins/StepMixins";

const state = {
  models: [],
};

const getters = {
  getStateModels(state) {
    return state.models;
  },
};
const mutations = {
  getModel(state, payload) {
    state.models = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name };
      state.models.push(test);
    });
    NextStep("brand", "model");
  },
};

const actions = {
  getModels({ commit, rootState }, payload) {
    rootState.selectedItems.brand = payload;
    this.axios
      .get(
        "/api/v1/models/query?brand_id=" +
          payload.id +
          "&device_type_id=" +
          rootState.selectedItems.device.id
      )
      .then((response) => {
        commit("getModel", response.data.data);
      })
      .catch((e) => console.log(e));
  },
};

export default {
  getters,
  state,
  mutations,
  actions,
};
