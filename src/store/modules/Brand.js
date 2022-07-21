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
    console.log("getBrand mutations worked.")
    console.log(payload)
    state.brands=[];
    payload.forEach((item, index) => {
      //console.log(item + "-" + index)
       let test = { id : index, text:item.Text }
      state.brands.push(test)
    })
    //state.brands = payload;

  },

};

const actions = {
  getBrands({ commit, rootState }, payload) {
    $("#brand")[0].click();
   
    console.log("getBrands action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem device : " +rootState.selectedItems.device)
    rootState.tabDisabled.brand = false;
    let brandList = [{ Id: 1, Text: "Apple" }, { Id: 2, Text: "Samsung" }]
    commit("getBrand", brandList);
    // axios.get("http://localhost:8080/api/v1/brand?device_type_id="+ payload.device_type_id)
    // .then(response => {
    //     console.log("brand response : " + response.data);
    //     commit("getBrand", response.data);
    // })
    // .catch(e => console.log(e));  

  },

};

export default {
  getters,
  state,
  mutations,
  actions,
};