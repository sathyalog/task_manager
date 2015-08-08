(function() {
    'use strict';

    angular
        .module('app.tasks')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tasks',
                config: {
                    url: '/tasks',
                    templateUrl: 'app/tasks/tasks.html',
                    controller: 'TaskController',
                    controllerAs: 'vm',
                    title: 'Tasks',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Your Tasks'
                    }
                }
            }
        ];
    }
})();
