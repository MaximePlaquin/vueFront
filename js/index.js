Vue.use(Vuetify);

var vm = new Vue({
  el: '#app',
  data() {
    return {
       items: [],
       baseUrlTodos : "http://localhost:3000/todos",
       searchInput : ""
    }
  },
  methods: {
    getAllTodosTitle : function () {
      return vm.$http.get(vm.baseUrlTodos).then(function(resp){
          return vm.items = resp.body.data;
      }, function(err){
          console.log(err);
      });
    },
    searchTitle : function ($event) {
      console.log(vm.searchInput);
    }
  }
})

vm.getAllTodosTitle();