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

      // let modelList = [
      // {id : 1, text : "TELEFON"} ,
      // {id : 2, text : "TABLET"},
      // {id : 3, text : "OYUN KONSOLU&TV"},
      // {id : 4, text : "PC"},
      // {id : 5, text : "DİJİTAL FOTOĞRAF MAKİNASI&KAMERA"},
      // {id : 6, text : "ELEKTRİKLİ EV/ENDÜSTRİYEL ALETLER"},]
      // modelList.forEach((item) => {
      //   let test = { id : item.id, text:item.text }
      //   state.deviceTypes.push(test)
      // })
      var arr = []
      payload.forEach((item) => {
        let test = { id : item.ID, text:item.Name }
        console.log(test)
        arr.push(test)
        state.deviceTypes = arr;
        console.log(arr)


      })
    },
   
  };
  
  const actions = {
    getDeviceTypes({ commit }) {
      this.axios.get("http://167.172.105.3:8000/api/v1/device-types")
        .then(response => {
            console.log(response.data.data);
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