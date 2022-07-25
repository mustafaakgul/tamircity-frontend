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
        let test = { id : index, text:item.Text }
        state.models.push(test)
      })
      NextStep("brand", "model");
    },
   
  };
  
  const actions = {
    getModels({ commit, rootState }, payload) {
      console.log("getModels action worked " + payload.id + " " + payload.text)
      console.log("Rootstate SelectedItem brand : " +rootState.selectedItems.brand)
      rootState.tabDisabled.model = false;
      let modelList = [{ Id: 1, Text: "Iphone 11" }, { Id: 2, Text: "Iphone 12" }]
      commit("getModel", modelList);
    //     axios.get("http://localhost:8080/api/v1/model?brand_id="+payload.brand_id +"&device_type_id="+ payload.device_type_id)
    //     .then(response => {
    //         console.log("model response : " + response.data);
    //         commit("getModel", response.data);
    //     })
    //     .catch(e => console.log(e));  
      
    },
   
  };
  
  export default {
    getters,
    state,
    mutations,
    actions,
  };