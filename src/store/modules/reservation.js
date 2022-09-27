import NextStep from "../../mixins/StepMixins";

const state = {
  userInfo:{
  }
}

const getters = {
 
};

const mutations = {
  createReservation(state, payload) {
    
      


  },

};

const actions = {
    createReservation({ commit, rootState }, payload) {
    console.log("createReservation action worked")
    rootState.selectedItems.extra = payload;
    NextStep("extraProduct", "reservation");
    // this.axios.get("/api/v1/extra-services")
    // .then(response => {
    //     console.log("extraService response : " + JSON.stringify(response.data));
    //     commit("getExtra", response.data.data);
    // })
    // .catch(e => console.log(e));  

  },

};

export default {
  state,
  getters,
  mutations,
  actions,
};