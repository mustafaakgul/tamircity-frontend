import NextStep from "../../mixins/StepMixins";

const state = {
  fixTypes: [],
};

const getters = {
  getStateFixTypes(state) {
    return state.fixTypes;
  },
};

const mutations = {
  getFixType(state, payload) {
    state.fixTypes = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.description };
      state.fixTypes.push(test);
    });
    NextStep("model", "fixType");
  },
};

const actions = {
  getFixTypes({ commit, rootState }, payload) {
    rootState.selectedItems.model = payload;
    this.axios
      .get(
        "/api/v1/fix-types/query?device_type_Id=" +
          rootState.selectedItems.device.id
      )
      .then((response) => {
        commit("getFixType", response.data.data);
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
