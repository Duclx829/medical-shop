export default {
  methods: {
    getAPI: function (callback, param) {
      const API = "http://localhost:3000";
      fetch(`${API}/${param}`)
        .then((res) => res.json())
        .then(callback);
    },
  },
};
