(function() {
  angular.module('app')
    .controller('toolBar', toolBar);

    function toolBar() {
      const vm = this;

      vm.selectAll = function(mail) {
        let selected = mail.filter(i => i.selected === true)
        if (mail.length === selected.length) {
          mail.map(i => i.selected = false)
        } else {
          mail.map(i => i.selected = true)
        }
      }

      vm.markRead = function(mail) {
        let selected = mail.filter(i => i.selected === true)
        selected.map(i => i.read = true)
        mail.map(i => i.selected = false)
      }

      vm.markUnread = function(mail) {
        let selected = mail.filter(i => i.selected === true)
        selected.map(i => i.read = false)
        mail.map(i => i.selected = false)
      }

      vm.unreadMessages = function(mail) {
        let unread = mail.filter(i => i.read === false)
        return unread.length
      }

      vm.labels = [
        {
          id: 1,
          label: "dev"
        },
        {
          id: 2,
          label: "personal"
        },
        {
          id: 3,
          label: "gschool"
        }
      ]

      vm.selectLabel = function(labels, mail) {
        let selected = mail.filter(i => i.selected === true)
        let selArr = selected.map(i => i.labels);
        for (var i = 0; i < selArr.length; i++) {
          if (!selArr[i].includes(labels)) {
            selArr[i].push(labels);
          }
        }
        mail.map(i => i.selected = false)
      }

      vm.removeLabel = function(labels, mail) {
        let selected = mail.filter(i => i.selected === true);
        let selArr = selected.map(i => i.labels);
        let labelIndex = selected.map(i => i.labels.indexOf(labels));
        for (var i = 0; i < selArr.length; i++) {
          if (selArr[i].includes(labels)) {
            selArr[i].splice(labelIndex, 1)
          }
        }
        mail.map(i => i.selected = false)
      }

      vm.delete = function(mail) {
        let selected = mail.filter(i => i.selected === true);
        let index = 0;
        for (var i = 0; i < selected.length; i++) {
          for (var j = 0; j < mail.length; j++) {
            if (selected[i].id === mail[j].id) {
              mail.splice(j, 1)
            }
          }
        }
      }




    }

})()
