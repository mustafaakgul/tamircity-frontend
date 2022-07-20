const state ={
    models:[]
}

const mutations = {
    getModel(state, payload) {
      state.models = payload;
    },
   
  };
  
  const actions = {
    getModels({ commit }, payload) {
        axios.get("http://localhost:8080/api/v1/model?brand_id="+payload.brand_id +"&device_type_id="+ payload.device_type_id)
        .then(response => {
            console.log("model response : " + response.data);
            commit("getModel", response.data);
        })
        .catch(e => console.log(e));  
      
    },
   
  };
  
  export default {
    state,
    mutations,
    actions,
  };