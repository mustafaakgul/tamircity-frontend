const state ={
    brands:[]
}

const mutations = {
    getBrand(state, payload) {
      state.brands = payload;
    },
   
  };
  
  const actions = {
    getBrands({ commit }, payload) {
        axios.get("http://localhost:8080/api/v1/brand?device_type_id="+ payload.device_type_id)
        .then(response => {
            console.log("brand response : " + response.data);
            commit("getBrand", response.data);
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