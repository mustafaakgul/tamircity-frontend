import NextStep from "../../mixins/StepMixins";

const state ={
    models:[]
}

const getters = {
  getStateModels(state) {
    return state.models;
  },
};
const mutations = {
  
    getModel(state, payload) {
      state.models = [];
      payload.forEach((item, index) => {
        let test = { id : item.id, text:item.name }
        state.models.push(test)
      })
      NextStep("brand", "model");
    },
   
  };
  
  const actions = {
    getModels({ commit, rootState }, payload) {
      rootState.selectedItems.brand = payload;
      console.log("getModels action worked " + payload.id + " " + payload.text)
      console.log("Rootstate SelectedItem brand : " +rootState.selectedItems.brand)
      console.log("Rootstate SelectedItem device : " +rootState.selectedItems.device.id)
      rootState.tabDisabled.model = false;
        this.axios.get("/api/v1/models/query?brand_id="+payload.id +"&device_type_id="+ rootState.selectedItems.device.id)
         .then(response => {
             console.log("model response : " + response.data.data);
            commit("getModel", response.data.data);
        })
         .catch(e => console.log(e));
      
    },
   
  };
  
  export default {
    getters,
    state,
    mutations,
    actions,
  };