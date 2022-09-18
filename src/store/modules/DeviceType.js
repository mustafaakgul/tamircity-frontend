const state ={
  deviceTypes: [
  ]
}
const getters = {
  getStateDeviceTypes(state) {
    return state.deviceTypes;
  },
};

const mutations = {
    getDeviceType(state, payload) {
      state.deviceTypes = payload;
    },
   
  };
  
  const actions = {
    getDeviceTypes({ commit }) {
      this.axios.get("http://167.172.105.3:8000/api/v1/device-types")
        .then(response => {
            console.log(response.data.data);
            commit("getDeviceType", response.data);
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