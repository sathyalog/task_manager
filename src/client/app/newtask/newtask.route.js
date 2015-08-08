(function() {
    'use strict';

    angular
        .module('app.newtask')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'newtask',
                config: {
                    url: '/newtask',
                    templateUrl: 'app/newtask/newtask.html',
                    controller: 'NewTaskController',
                    controllerAs: 'vm',
                    title: 'New Task',
                    
                }
            }
        ];
    }
})();
