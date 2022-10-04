const state = {
  reservationNumber: null,
  reservationInfo :{}
};

const getters = {
  
};

const mutations = {
  getReservationInfo(state, payload) {
    state.pendingList = payload;
  },
};

const actions = {
  getReservationInfos({ commit, rootState, state }, payload) {
    console.log("reservation number : "+ state.reservationNumber)
    // this.axios
    //   .get("/api/v1/reservations/pending?technical_service_id=1")
    //   .then((response) => {
    //     console.log(
    //       "getPendingList response : " + JSON.stringify(response.data.data)
    //     );
    //     commit("getPendingList", response.data.data);
    //   })
    //   .catch((e) => console.log(e));
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
