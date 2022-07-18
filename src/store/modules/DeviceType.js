const state ={
    deviceTypes:[]
}

const mutations = {
    getDeviceType(state, payload) {
      state.deviceTypes = payload;
    },
   
  };
  
  const actions = {
    getDeviceTypes({ commit }) {
        axios.get("http://localhost:8080/api/v1/device-type/active")
        .then(response => {
            console.log("device type response : " +response.data);
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