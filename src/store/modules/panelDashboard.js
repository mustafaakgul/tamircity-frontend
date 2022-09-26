const state = {
  pendingList : [],
  completedList: []

}

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
    console.log("getPendingList mutation worked")
    state.pendingList = payload;
  },
  getCompletedList(state, payload) {
    console.log("getCompletedList mutation worked")
    state.completedList = payload;
  },

};

const actions = {
  getPendingList({ commit, rootState }, payload) {
    console.log("getPendingList action worked")
    //rootState.selectedItems.device = payload;
    this.axios.get("/api/v1/reservations/pending?technical_service_id=1")
    
    .then(response => {
        console.log("getPendingList response : " +JSON.stringify(response.data.data));
        commit("getPendingList", response.data.data);
    })
    .catch(e => console.log(e));  
   },
   getCompletedList({ commit, rootState }, payload) {
    console.log("getCompletedList action worked")
    //rootState.selectedItems.device = payload;
    this.axios.get("/api/v1/reservations/completed?technical_service_id=1")
    
    .then(response => {
        console.log("getCompletedList response : " +JSON.stringify(response.data.data));
        commit("getCompletedList", response.data.data);
    })
    .catch(e => console.log(e));  
   },
};

// function StepGuide(removeElementId, addElementId) {
//   let remove_element = "#" + removeElementId;
//   let remove_element_tab = "#" + removeElementId;
//   let add_element = "#" + addElementId;
//   let add_element_tab = "#" + addElementId;

//   $(remove_element).removeAttr("disabled")
//   $(remove_element).removeClass("active")
//   $(remove_element_tab).removeClass("active show")
//   $(add_element).addClass("active")
//   $(add_element_tab).addClass("active show")
// }

export default {
  getters,
  state,
  mutations,
  actions,
};