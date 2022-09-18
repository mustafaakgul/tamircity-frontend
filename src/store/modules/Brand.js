import NextStep from "../../mixins/StepMixins";
const state = {
  brands: [],

}

const getters = {
  getStateBrands(state) {
    return state.brands;
  },
};

const mutations = {
  getBrand(state, payload) {
    state.brands = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name }
      state.brands.push(test)
    })
    NextStep("device", "brand");
  },

};

const actions = {
  getBrands({ commit, rootState }, payload) {
    console.log("getBrands action worked " + payload.id + " " + payload.text)
    // console.log("Rootstate SelectedItem device : " + rootState.selectedItems.device)
     rootState.selectedItems.device = payload;
    // let brandList = [{ Id: 1, Text: "Apple" }, { Id: 2, Text: "Samsung" }]
    
    this.axios.get("http://167.172.105.3:8000/api/v1/brands/query?device_type_id="+ payload.id)
    
    .then(response => {
        console.log("brand response : " + response.data.data);
        commit("getBrand", response.data.data);
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