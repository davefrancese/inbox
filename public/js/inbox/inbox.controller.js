(function() {
  angular.module('app')
    .controller('showMail', showMail);

    function showMail(mainService) {
      const vm = this;

      mainService.mail()
        .then((res) => {
          vm.mail = res.data._embedded.messages;
        })

    }


    service('mainService', function($http) {
      this.mail = function() {
        return $http.get('https://angular-inbox-api.herokuapp.com/api/messages')
      }
    })

})()
