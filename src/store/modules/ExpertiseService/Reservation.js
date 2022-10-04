import NextStep from "../../../mixins/StepMixins";

const state = {
  userInfo: {},
};

const getters = {};

const mutations = {
  createReservation(state, payload) {},
};

const actions = {
  createReservation({ commit, rootState }, payload) {
    rootState.selectedItems.expertiseService = payload;
    NextStep("expertiseService", "reservation");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
