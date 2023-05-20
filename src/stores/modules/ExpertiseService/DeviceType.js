const state ={
  deviceTypes: []
}
const getters = {
  getStateDeviceTypes(state) {   
    return state.deviceTypes;
  },
};

const mutations = {
    getDeviceType(state, payload) {
      var arr = []
      payload.forEach((item) => {
        let test = { id : item.ID, text:item.Name }
        arr.push(test)
        state.deviceTypes = arr;
      })
    },
   
  };
  
  const actions = {
    getDeviceTypes({ commit }) {
      this.axios.get("/api/v1/device-types")
        .then(response => {
            commit("getDeviceType", response.data.data);
        })
        .catch(e => console.log(e));  
      
    },

  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };