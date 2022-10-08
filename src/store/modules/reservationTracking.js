const state = {
  reservationNumber: null,
  reservationInfo :{}
};

const getters = {
  getStateReservationInfo(state){
    return state.reservationInfo ;
  }
  
};

const mutations = {
  getReservationInfo(state, payload) {
    state.reservationInfo = payload;
    console.log (state.reservationInfo)
  },
};

const actions = {
  getReservationInfos({ commit, rootState, state }, payload) {
    console.log("reservation number : "+ state.reservationNumber)
    this.axios
      .get("/api/v1/reservations/1")
      .then((response) => {
        console.log(
          "getPendingList response : " + JSON.stringify(response.data.data)
        );
        commit("getReservationInfo", response.data.data);
      })
      .catch((e) => console.log(e));
  },
  getCompletedList({ commit, rootState }, payload) {
    this.axios
      .get("/api/v1/reservations/1")
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
