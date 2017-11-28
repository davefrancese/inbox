(function() {
  angular.module('app')
    .component('inbox', {
      templateUrl: '/js/inbox/inbox.template.html',
      bindings: {
        selectAll: "="
      }
    })
})()
