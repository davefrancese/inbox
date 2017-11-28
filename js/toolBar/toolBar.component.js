(function() {
  angular.module('app')
    .component('toolBar', {
      templateUrl: '/js/toolBar/toolBar.template.html',
      bindings: {
        mail: '=',
      }
    })
})()
