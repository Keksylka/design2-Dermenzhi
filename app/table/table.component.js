angular.
    module('designApp').
    component('table', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/table/table.template.html',
        controller: function TableController() {            
        }
});
