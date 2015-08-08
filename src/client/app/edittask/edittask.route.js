(function() {
    'use strict';

    angular
        .module('app.edittask')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'edittask',
                config: {
                    url: '/edittask',
                    templateUrl: 'app/edittask/edittask.html',
                    controller: 'EditTaskController',
                    controllerAs: 'vm',
                    title: 'Edit Task',
                    
                }
            }
        ];
    }
})();
