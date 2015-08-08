(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'logger','config'];
    /* @ngInject */
    function dataservice($http, $q, logger,config) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            updateAfterSubmit:updateAfterSubmit,
            getTasksList:getTasksList,
            getTask:getTask,
            updateEditSubmit:updateEditSubmit,
            deleteTask:deleteTask
        };

        return service;

        function getMessageCount() { return $q.when(72); }
        function updateAfterSubmit(app){
                //app = JSON.stringify(app);
                //console.log(app.taskTitle);
                // var params = {
                //     taskTitle : app.taskTitle,
                //     taskDesc:app.taskDesc
                // };
                return $http.post(config.baseURL+"/tasks/",{
                    taskTitle : app.taskTitle,
                    projectName:app.projectName,
                    taskDesc:app.taskDesc,
                    taskHrs:app.taskHrs,
                    createdTime:app.createdTime,
                    taskStatus:app.taskStatus
                })
                .then(success)
                .catch(fail);

                function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for tasks failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }

            }

        function getTasksList(){

            return $http.get(config.baseURL+"/tasks/").then(success).catch(fail);

            function success(response){
                return response.data;
            }
            function fail(error){
                var msg = 'query for tasks failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }


        }   

        function getTask(id){

            return $http.get(config.baseURL+"/tasks/"+id).then(success).catch(fail);

            function success(response){
                return response.data;
            }
            function fail(error){
                var msg = 'query for tasks failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }


        }  

        function deleteTask(id){

            return $http.delete(config.baseURL+"/tasks/"+id).then(success).catch(fail);

            function success(response){
                return response.data;
            }
            function fail(error){
                var msg = 'query for tasks failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }


        }  

        function updateEditSubmit(app,id){

            return $http.put(config.baseURL+"/tasks/"+id,{
                    taskTitle : app.taskTitle,
                    projectName:app.projectName,
                    taskDesc:app.taskDesc,
                    taskHrs:app.taskHrs,
                    createdTime:app.createdTime,
                    taskStatus:app.taskStatus
                }).then(success).catch(fail);

            function success(response){
                return response.data;
            }
            function fail(error){
                var msg = 'query for tasks failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }


        }    

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }

            
        }
    }
})();
