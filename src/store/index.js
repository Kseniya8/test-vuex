import { createStore } from 'vuex'
import axiosInstance from '@/api/index' //imported axios
import { USERS, USERS_BY_ID } from '@/api/routes'

export default createStore({
  state: {
    users: {}
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      return axiosInstance.get(USERS())
        .then((data) => {
          commit('setUsers', { users: data.data })
        })
        .catch(err => console.log(err));
    },
    fetchSpecificUser(_, id) {
      return axiosInstance.get(USERS_BY_ID(id))
    }
  },
  modules: {
  }
})
