import NextStep from "../../../mixins/StepMixins";

const state = {
  fixTypes: [],
};

const getters = {
  getStateTechFixTypes(state) {
    return state.fixTypes;
  },
};

const mutations = {
  getTechFixType(state, payload) {
    state.fixTypes = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.description };
      state.fixTypes.push(test);
    });
    NextStep("model", "fixType");
  },
};

const actions = {
  getTechFixTypes({ commit, rootState }, payload) {
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
