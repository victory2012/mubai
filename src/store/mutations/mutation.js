export default {
  GET_MAP_DATA(state, data) {
    state.mapData = data;
  },
  triggerManfictor(state) {
    state.manfictor = !state.manfictor;
  }
};
