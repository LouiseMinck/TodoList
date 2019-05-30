const uuidv1 = require("uuid/v1");

export default {
  namespaced: true,
  state: {
    lists: []
  },
  actions: {
    addList({ commit }: any, name: string) {
      let newList = {
        name: name,
        id: uuidv1(),
        date: new Date()
      };
      commit("ADD_LIST", newList);
    },
    setListName({ commit, state }: any, listInfos: any) {
      let currentList = state.lists
        .filter((list: any) => list.id === listInfos.key)
        .pop();
      currentList.name = listInfos.name;
      commit("SET_LIST_NAME", currentList);
    }
  },
  mutations: {
    ADD_LIST(state: any, newList: any) {
      state.lists.push(newList);
      localStorage.Lists = JSON.stringify(state.lists);
    },
    SET_LISTS(state: any, lists: any) {
      state.lists = lists;
    },
    SET_LIST_NAME(state: any, currentList: any) {
      state.lists.forEach((list: any) => {
        if (list.id === currentList.id) {
          list.name = currentList.name;
        }
      });
      localStorage.Lists = JSON.stringify(state.lists);
    },
    DELETE_LIST(state: any, id: string) {
      state.lists = state.lists.filter((list: any) => list.id != id);
      localStorage.Lists = JSON.stringify(state.lists);
    }
  },
  getters: {
    lists(state: any) {
      return state.lists;
    },
    list(state: any) {
      return (id: any) =>
        state.lists
          .filter((list: any) => {
            return list.id === id;
          })
          .pop();
    }
  }
};
