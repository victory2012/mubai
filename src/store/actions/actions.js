export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num);
    }, data.time);
  }
};
