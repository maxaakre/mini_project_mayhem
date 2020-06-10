import Vue from "vue";
import Vuex from "vuex";
import Axios from "axois";

const API "http://localhost:6001/api/tickets"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: {},
  },
  mutations: {
    displayTicketMenu(state, menu) {
      state.tickets = ticket;
    },
  },
  actions: {
    async getTicketList(context) {
      let resp = await axios.get(API);
      context.commit("displayTicket", resp.data.tickets);
    },
  },
  modules: {},
});
