const state = {
  pendingList: [],
  completedList: [],
};

const getters = {
  getStatePendingList(state) {
    return state.pendingList;
  },
  getStatePendingListCount(state) {
    return state.pendingList.length;
  },
  getStateCompletedList(state) {
    return state.completedList;
  },
  getStateCompletedListCount(state) {
    return state.completedList.length;
  },
};

const mutations = {
  getPendingList(state, payload) {
    state.pendingList = payload;
  },
  getCompletedList(state, payload) {
    state.completedList = payload;
  },
};

const actions = {
  getPendingList({ commit, rootState }, payload) {
    this.axios
      .get("/api/v1/reservations/pending?technical_service_id=1")
      .then((response) => {
        console.log(
          "getPendingList response : " + JSON.stringify(response.data.data)
        );
        commit("getPendingList", response.data.data);
      })
      .catch((e) => console.log(e));
  },
  getCompletedList({ commit, rootState }, payload) {
    this.axios
      .get("/api/v1/reservations/completed?technical_service_id=1")
      .then((response) => {
        console.log(
          "getCompletedList response : " + JSON.stringify(response.data.data)
        );
        commit("getCompletedList", response.data.data);
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
