(function() {
  var app = angular.module('app')
    .controller('showMail', showMail);

    function showMail($http) {
      const vm = this;

      $http.get('http://localhost:8082/api/messages')
      .then((res) => {
        vm.mail = res.data._embedded.messages;
      })

      vm.star = function(id, boolean) {
        let data = {
          "messageIds": [id],
          "command": "star",
          "star": boolean
        }
        $http.patch('http://localhost:8082/api/messages', data)
        .then(() => {
          $http.get('http://localhost:8082/api/messages')
          .then((res) => {
            vm.mail = res.data._embedded.messages;
          })
        })
      }






    }

})()
