const state ={
  deviceTypes: [
    {id : 1, text : "TELEFON"} ,
    {id : 2, text : "TABLET"},
    {id : 3, text : "OYUN KONSOLU&TV"},
    {id : 4, text : "PC"},
    {id : 5, text : "DİJİTAL FOTOĞRAF MAKİNASI&KAMERA"},
    {id : 6, text : "ELEKTRİKLİ EV/ENDÜSTRİYEL ALETLER"},
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