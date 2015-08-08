(function() {
    'use strict';

    angular
        .module('blocks.session')
        .factory('session', session);

    /**
     * Session service that stores data in html5 sessionStorage using our prefix.
     */
    session.$inject = ['store'];

    /* @ngInject */
    function session(store) {
        return store.getNamespacedStore('10miles', 'sessionStorage');
    }

}());
