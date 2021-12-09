import { defineStore } from 'pinia'
import jwtDecode from 'jwt-decode';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null
  }),

  actions: {
    setUser(data) {
      this.currentUser = data
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      router.push({ name: "Home" });
    },

    logout() {
      localStorage.clear()
      this.currentUser = null
      router.push({ name: "SignIn" })
    }
  },

  getters: {
    userId: (state) => jwtDecode(state.currentUser.access).user_id
  }
})