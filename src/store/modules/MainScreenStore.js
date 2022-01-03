export const MainScreenStore = {
  state () {
    return {
      count: 0
    }
  },
  getters: {
    newGetter:state=>{
      return state.newState
    }
  },
  mutations: {
    NEW_MUTATION(state, data){
      state.newState = data
    }
  },
  actions: {
    newAction({ commit }, data) {
      commit("NEW_MUTATION", data);
    }
  }
};