(function() {
    'use strict';

    angular
        .module('blocks.session')
        .factory('SessionUtils', SessionUtils);

    SessionUtils.$inject = ['$q', 'session', 'logger', 'constants'];

    /* @ngInject */
    function SessionUtils($q, session, logger, constants) {
        var service = {
            clearSession: clearSession
        };

        return service;

        /////////////////////

        function clearSession() {
            logger.info('clearing session data...');

            session.remove(constants.taskid);
           

           
        };

    }

}());
