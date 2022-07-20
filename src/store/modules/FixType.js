const state ={
    fixTypes:[]
}

const mutations = {
    getFixType(state, payload) {
      state.fixTypes = payload;
    },
   
  };
  
  const actions = {
    getFixTypes({ commit }, payload) {
        axios.get("http://localhost:8080/api/v1/brand?device_type_id="+ payload.device_type_id)
        .then(response => {
            console.log("fixTypes response : " + response.data);
            commit("getFixType", response.data);
        })
        .catch(e => console.log(e));  
      
    },
   
  };
  
  export default {
    state,
    mutations,
    actions,
  };