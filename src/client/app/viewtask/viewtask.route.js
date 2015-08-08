(function() {
    'use strict';

    angular
        .module('app.viewtask')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'viewtask',
                config: {
                    url: '/viewtask',
                    templateUrl: 'app/viewtask/viewtask.html',
                    controller: 'ViewTaskController',
                    controllerAs: 'vm',
                    title: 'View Task',
                    // settings: {
                    //     nav: 2,
                    //     content: '<i class="fa fa-lock"></i> Your Tasks'
                    // }
                }
            }
        ];
    }
})();
