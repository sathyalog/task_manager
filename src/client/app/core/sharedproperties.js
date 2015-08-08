(function () {
    'use strict';

    angular
        .module('app.core')
        .service('sharedProperties', function () {
        var id = '1';

        return {
            getId: function () {
                return id;
            },
            setId: function(value) {
                id = value;
            }
        };
    });

});