const state = {
    application: {
        techServiceName: "",
        businessType: "",
        address: "",
        numberOfBranches: "",
        numberOfTechnicians: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
    },
};

const getters = {
};

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    },
};

const actions = {
    saveApplication({commit, state}) {
        this.axios
            .post(
                "http://localhost:8888/api/v1/expertise-services-candidate/apply",
                state.application
            )
            .then((response) => {
                techServiceApplication.id = response.body.data.ID;
                commit("updateProductList", product);
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count,
                };
                dispatch("setTradeResult", tradeResult);
                router.replace("/");
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};